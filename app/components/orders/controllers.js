const OrderService = require('./service');

const orderService = new OrderService();

class OrderController {
  getOrders = async (req, res) => {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching orders');
    }
  };

  getOrdersById = async (req, res) => {
    try {
      const order = await orderService.getOrderById(req.params.id);
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(404).send('Order not found');
    }
  };

  deleteOrdersById = async (req, res) => {
    try {
      const order = await orderService.deleteOrdersById(req.params.id);
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(404).send('Order not found');
    }
  };

  createOrder = async (req, res) => {
    try {
      console.log("IN HERE createOrders req.body: ");
      console.log(req.body);
      const order = await orderService.createOrders(req.body);
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(404).send('Order not found');
    }
  };

  updateOrder = async (req, res) => {
      try {
        const order = await orderService.updateOrders(req.params.id, req.body);
        res.json(order);
      } catch (error) {
        console.error(error);
        res.status(404).send('Order not found');
      }
    };
}

module.exports = OrderController;