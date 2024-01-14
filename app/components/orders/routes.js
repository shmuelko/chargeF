const express = require('express');
const router = express.Router();
const OrderController = require('./controllers');

const orderController = new OrderController();

router.use(express.json());

router.post('/', orderController.createOrder);
router.patch('/:id', orderController.updateOrder);
router.get('/', orderController.getOrders);
router.get('/:id', orderController.getOrdersById);
router.delete('/:id', orderController.deleteOrdersById);


module.exports = router;