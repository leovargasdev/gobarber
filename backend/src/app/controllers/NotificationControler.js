import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationControler {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });
    // Verificando se é um prestador de serviço
    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifications.' });
    }

    const notification = await Notification.find({ user: req.userId })
      .sort({ createdAt: -1 })
      .limit(20);
    return res.json(notification);
  }

  async update(req, res) {
    const { id } = req.params;

    const notification = await Notification.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );
    return res.json(notification);
  }
}

export default new NotificationControler();
