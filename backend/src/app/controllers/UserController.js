import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(5),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) res.status(400).json({ error: 'User already exists' });

    const { id, email, name, provider } = await User.create(req.body);

    return res.json({
      id,
      email,
      name,
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(5),
      password: Yup.string()
        .min(5)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);
    // Verificação 1: Caso tente alterar o email, verificar se o email já existe no banco
    if (email && email !== user.email) {
      const UserExists = await User.findOne({ where: { email } });

      if (UserExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }
    // Verificação 2: Fornecer a senha antiga para poder alterar a senha
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { name, id, email: emailU, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email: emailU,
      provider,
    });
  }
}

export default new UserController();
