const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: Number, //{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      productId: Number,//{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
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