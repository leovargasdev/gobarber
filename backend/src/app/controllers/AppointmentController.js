import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

import User from '../models/User';
import File from '../models/File';
import Appointment from '../models/Appointment';
import Notification from '../schemas/Notification';
import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { provider_id, date } = req.body;

    // Usuário não pode criar reserva em seus próprios serviços
    if (provider_id === req.userId) {
      return res.status(401).json({
        error: 'You can not create appointments in your own appointments.',
      });
    }

    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });
    // Verificando se o usuário é um prestador de serviço
    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers.' });
    }
    // Ajusta a data só para horas, tira os minutos e segundos
    const hourStart = startOfHour(parseISO(date));
    // Confere se a data solicitada na reservar não é do passado, mas sim uma data futura
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted.' });
    }

    const checkAvailability = await Appointment.findOne({
      where: { provider_id, canceled_at: null, date: hourStart },
    });
    // Garante que não exista um agendamento no mesmo horário pelo mesmo provider
    if (checkAvailability) {
      return res.status(400).json({ error: 'Past dates is not available.' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    });

    const user = await User.findByPk(req.userId);
    const formatDate = format(hourStart, "'dia' dd 'de' MMMM', às' H:mm'h'", {
      locale: pt,
    });

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formatDate}`,
      user: provider_id,
    });

    return res.json(appointment);
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const appointment = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      attributes: ['date', 'id', 'past', 'cancelable'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'id'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(appointment);
  }

  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });
    // Somente o usuário que criou o agendamento pode deletar
    if (appointment.user_id !== req.userId) {
      return res.status(400).json({
        error: "You don't have permissionto cancel this appointment.",
      });
    }
    // Subitrair 2 horas da data de agendamento
    const dataWithSub = subHours(appointment.date, 2);
    // Um agendamento não pode mais ser cancelado nas 2 últimas horas antes do horário marcado.
    if (isBefore(dataWithSub, new Date())) {
      return res.status(400).json({
        error: 'You can only cancel appointment 2 hours in advance.',
      });
    }

    appointment.canceled_at = new Date();

    await appointment.save();

    await Queue.add(CancellationMail.key, {
      appointment,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
