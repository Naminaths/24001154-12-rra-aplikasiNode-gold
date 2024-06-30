const { User } = require('../../models');

class UserRepository {
  constructor(UserModel) {
    this.User = UserModel;
  }
  
  async findAll() {
    const userList = await User.findAll();

    return userList;
  }

  async create(user) {
    const createdUser = await User.create({
      name: user.name,
      email: user.email,
      password: user.password
    });
    return createdUser;
}

//   async create(user) {
//     return await this.User.create(user);
//   }

  async findByEmail(email) {
    return await this.User.findOne({ where: { email } });
  }
}

module.exports = new UserRepository(User);
