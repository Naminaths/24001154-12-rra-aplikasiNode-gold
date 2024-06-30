class OrderController {
    constructor(orderService) {
      this.orderService = orderService;
    }
  
    async createOrder(req, res) {
      try {
        const order = await this.orderService.createOrder(req.body);
        res.status(201).json(order);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  
    async updateOrderStatus(req, res) {
      try {
        const order = await this.orderService.updateOrderStatus(req.params.id, req.body.status);
        if (order) {
          res.json(order);
        } else {
          res.status(404).json({ message: 'Order not found' });
        }
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  }
  
  const orderService = require('../services/orderService');
  module.exports = new OrderController(orderService);
  