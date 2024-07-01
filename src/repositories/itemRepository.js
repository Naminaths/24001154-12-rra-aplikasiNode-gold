const { Item } = require('../../models');

class ItemRepository {
  constructor(ItemModel) {
    this.Item = ItemModel;
  }

  async create(item) {
    return await this.Item.create(item);
  }

  async findAll() {
    return await this.Item.findAll();
  }

  async findById(id) {
    const item = await this.Item.findByPk(id);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  }

  async createOrUpdate(id, itemData) {
    const item = await this.Item.findByPk(id);
    if (item) {
      await item.update(itemData);
      return item;
    } else {
      itemData.id = id;
      const newItem = await this.Item.create(itemData);
      return newItem;
    }
  }

  async update(id, itemData) {
    const item = await this.Item.findByPk(id);
    if (!item) {
      throw new Error('Item not found');
    }
    await item.update(itemData);
    return item;
  }

  async delete(id) {
    const item = await this.Item.findByPk(id);
    if (!item) {
      throw new Error('Item not found');
    }
    await item.destroy();
    return item;
  }
}

module.exports = new ItemRepository(Item);
