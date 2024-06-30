const { Item } = require('../../models');

class ItemRepository {
  constructor(ItemModel) {
    this.Item = ItemModel;
  }

  async findAll() {
    return await this.Item.findAll();
  }
}

module.exports = new ItemRepository(Item);
