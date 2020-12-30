'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');
let orderSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
    _vendorID: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
    },
    _vendorIDArray: {
      type: [String],
    },
    _userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    // _productID: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Product',
    // },
    products: [
      {
        item: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 },
        price: { type: Number, default: 0 },
      },
    ],
    _cartID: {
      type: Schema.Types.ObjectId,
      ref: 'Cart',
    },
    _completedCartID: {
      type: Schema.Types.ObjectId,
      ref: 'CompletedCart',
    },
    _transactionID: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
    },
    mobileNo: {
      type: Number,
    },
    orderNotes: {
      type: String,
    },
    delivery_location: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
