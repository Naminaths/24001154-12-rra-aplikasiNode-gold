class ItemService {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async addItem(item) {
    return await this.itemRepository.create(item);
  }

  async getItems() {
    return await this.itemRepository.findAll();
  }

  async getItemById(id) {
    return await this.itemRepository.findById(id);
  }

  async addItemById(id, itemData) {
    return await this.itemRepository.createOrUpdate(id, itemData);
  }

  async updateItem(id, itemData) {
    return await this.itemRepository.update(id, itemData);
  }

  async deleteItem(id) {
    return await this.itemRepository.delete(id);
  }
}

const itemRepository = require('../repositories/itemRepository');
module.exports = new ItemService(itemRepository);
