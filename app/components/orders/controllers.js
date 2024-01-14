const OrderService = require('./service');

exports.getOrders = async (req, res) => {
  try {
    const users = await OrderService.getAllOrders();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
};

exports.getOrdersById = async (req, res) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(404).send('Order not found');
  }
};