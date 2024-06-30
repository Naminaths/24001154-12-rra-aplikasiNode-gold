class OrderService {
    constructor(orderRepository) {
      this.orderRepository = orderRepository;
    }
  
    async createOrder(order) {
      return await this.orderRepository.create(order);
    }
  
    async updateOrderStatus(id, status) {
      return await this.orderRepository.updateStatus(id, status);
    }
  }
  
  const orderRepository = require('../repositories/orderRepository');
  module.exports = new OrderService(orderRepository);
  