'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const cartSchema = mongoose.Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
    _userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    _productID: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    ],
    quantity: {
      type: [Number],
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    numberOfItem: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Cart
 */
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
