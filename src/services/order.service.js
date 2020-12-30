const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a product
 * @param {Object} orderBody
 * @returns {Promise<Order>}
 */
const createOrder = async (orderBody) => {
  const order = await Order.create(orderBody);
  return order;
};

module.exports = {
  createOrder,
};
