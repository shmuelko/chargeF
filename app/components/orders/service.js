const Order = require('./model');

class OrderService {
  getAllOrders = async () => {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw new Error('Failed to fetch orders');
    }
  };

  getOrderById = async (orderId) => {
    try {
      const order = await Order.findById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      return order;
    } catch (error) {
      throw new Error('Failed to fetch order');
    }
  }

  deleteOrdersById = async (orderId) => {
    try {
      const order = await Order.findById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      const answer = await order.deleteOne();
      return answer;
    } catch (error) {
      throw new Error('Failed to delete order');
    }
  }

  createOrders = async (body) => {
    try {
      console.log("IN HERE createOrders body: ");
      console.log(body);
      const order = new Order(body);
      const savedOrder = await order.save();
      return savedOrder;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }

  updateOrders = async (orderId, newBody) => {
      try {
        const order = await Order.findByIdAndUpdate(orderId, newBody, { new: true })
        if (!order) {
          throw new Error('Order not found');
        }
        return order;
      } catch (error) {
        throw new Error('Failed to create order');
      }
    }
}

module.exports = OrderService;