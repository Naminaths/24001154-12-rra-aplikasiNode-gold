class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async register(req, res) {
      try {
        const user = await this.userService.register(req.body);
        res.status(201).json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  
    async login(req, res) {
      try {
        const user = await this.userService.login(req.body.email, req.body.password);
        if (user) {
          res.json(user);
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  }
  
  const userService = require('../services/userService');
  module.exports = new UserController(userService);
  