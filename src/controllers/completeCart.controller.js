const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { completedCart } = require('../services');

const createCompletedCart = catchAsync(async (req, res) => {
  const product = await completedCart.createCompletedCart(req.body);
  res.status(httpStatus.CREATED).send(product);
});

module.exports = {
  createCompletedCart,
};
