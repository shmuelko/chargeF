const Order = require('./model');

exports.getAllOrders = async () => {
  try {
    const users = await Order.find();
    return users;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

exports.getOrderById = async (userId) => {
  try {
    const order = await Order.findById(userId);
    if (!order) {
      throw new Error('User not found');
    }
    return order;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
}