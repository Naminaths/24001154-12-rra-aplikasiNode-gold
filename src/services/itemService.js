class ItemService {
    constructor(itemRepository) {
      this.itemRepository = itemRepository;
    }
  
    async getAllItems() {
      return await this.itemRepository.findAll();
    }
  }
  
  const itemRepository = require('../repositories/itemRepository');
  module.exports = new ItemService(itemRepository);
  