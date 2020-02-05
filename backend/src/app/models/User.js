import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    // Esse trecho de código é gerado antes da criar um novo usuário
    this.addHook('beforeSave', async user => {
      // só gera o hash se o campo password estiver preenchido
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  // static associate(models) {
  //   this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  // }
}

export default User;
