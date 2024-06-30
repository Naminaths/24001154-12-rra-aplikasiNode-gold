const { Order } = require('../../models');

class OrderRepository {
  constructor(OrderModel) {
    this.Order = OrderModel;
  }

  async create(order) {
    return await this.Order.create(order);
  }

  async findById(id) {
    return await this.Order.findByPk(id);
  }

  async updateStatus(id, status) {
    const order = await this.findById(id);
    if (order) {
      order.status = status;
      await order.save();
    }
    return order;
  }
}

module.exports = new OrderRepository(Order);
