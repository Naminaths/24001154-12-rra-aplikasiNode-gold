class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async register(user) {
      return await this.userRepository.create(user);
    }
  
    async login(email, password) {
      const user = await this.userRepository.findByEmail(email);
      if (user && user.password === password) {
        return user;
      }
      return null;
    }
  }
  
  const userRepository = require('../repositories/userRepository');
  module.exports = new UserService(userRepository);
  