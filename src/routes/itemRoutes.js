const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', (req, res) => itemController.addItem(req, res));
router.post('/:id', (req, res) => itemController.addItemById(req, res));
router.get('/', (req, res) => itemController.getItems(req, res));
router.get('/:id', (req, res) => itemController.getItemById(req, res));
router.put('/:id', (req, res) => itemController.updateItem(req, res));
router.delete('/:id', (req, res) => itemController.deleteItem(req, res));

module.exports = router;
