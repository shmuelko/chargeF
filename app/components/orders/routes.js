const express = require('express');
const router = express.Router();
const ordersController = require('./controllers');

router.get('/', ordersController.getOrders);

router.get('/:id', ordersController.getOrdersById);

module.exports = router;