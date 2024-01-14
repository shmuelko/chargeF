const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: Number,
  items: [
    {
      productId: Number,
      quantity: Number,
      price: Number,
      subtotal: Number
    }
  ],
  totalPrice: Number,
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);