const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.post('/', OrderController.createOrder);
router.put('/:id', OrderController.updateOrderStatus);

module.exports = router;
