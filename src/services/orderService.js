class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async addOrder(orderData) {
    return await this.orderRepository.create(orderData);
  }

  async getOrders() {
    return await this.orderRepository.findAll();
  }

  async getOrderById(id) {
    return await this.orderRepository.findById(id);
  }

  async updateOrder(id, orderData) {
    return await this.orderRepository.update(id, orderData);
  }

  async deleteOrder(id) {
    return await this.orderRepository.delete(id);
  }
}

const orderRepository = require('../repositories/orderRepository');
module.exports = new OrderService(orderRepository);
