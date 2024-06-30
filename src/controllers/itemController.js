class ItemController {
    constructor(itemService) {
      this.itemService = itemService;
    }
  
    async getAllItems(req, res) {
      try {
        const items = await this.itemService.getAllItems();
        res.json(items);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  }
  
  const itemService = require('../services/itemService');
  module.exports = new ItemController(itemService);
  