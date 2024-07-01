class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  async addOrder(req, res) {
    try {
      const order = await this.orderService.addOrder(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await this.orderService.getOrders();
      res.json(orders);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const id = req.params.id;
      const order = await this.orderService.getOrderById(id);
      res.json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const id = req.params.id;
      const status = req.body.status;

      if (!['Diterima', 'Diproses', 'Sedang Dikirim', 'Disampaikan', 'Dibatalkan'].includes(status)) {
        return res.status(400).json({ error: 'Status must be one of Diterima, Diproses, Sedang Dikirim, Disampaikan, Dibatalkan' });
      }

      const order = await this.orderService.updateOrder(id, req.body);
      res.json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      const id = req.params.id;
      const order = await this.orderService.deleteOrder(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

const orderService = require('../services/orderService');
module.exports = new OrderController(orderService);
