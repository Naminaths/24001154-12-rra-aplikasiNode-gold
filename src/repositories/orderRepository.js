const { Order } = require('../../models');

class OrderRepository {
  constructor(OrderModel) {
    this.Order = OrderModel;
  }

  async create(order) {
    return await this.Order.create(order);
  }

  async findAll() {
    return await this.Order.findAll();
  }

  async findById(id) {
    const order = await this.Order.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  }

  async update(id, orderData) {
    const order = await this.Order.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    await order.update(orderData);
    return order;
  }

  async delete(id) {
    const order = await this.Order.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    await order.destroy();
    return order;
  }
}

module.exports = new OrderRepository(Order);
