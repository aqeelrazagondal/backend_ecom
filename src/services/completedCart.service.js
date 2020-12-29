const httpStatus = require('http-status');
const { CompletedCart } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a CompletedCart
 * @param {Object} completedCartBody
 * @returns {Promise<CompletedCart>}
 */
const createCompletedCart = async (completedCartBody) => {
  const product = await CompletedCart.create(completedCartBody);
  return product;
};

module.exports = {
  createCompletedCart,
};
