class ItemController {
  constructor(itemService) {
    this.itemService = itemService;
  }

  async addItem(req, res) {
    try {
      const item = await this.itemService.addItem(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getItems(req, res) {
    try {
      const items = await this.itemService.getItems();
      res.json(items);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getItemById(req, res) {
    try {
      const id = req.params.id;
      const item = await this.itemService.getItemById(id);
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async addItemById(req, res) {
    try {
      const id = req.params.id;
      const item = await this.itemService.addItemById(id, req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateItem(req, res) {
    try {
      const id = req.params.id;
      const item = await this.itemService.updateItem(id, req.body);
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteItem(req, res) {
    try {
      const id = req.params.id;
      const item = await this.itemService.deleteItem(id);
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

const itemService = require('../services/itemService');
module.exports = new ItemController(itemService);
