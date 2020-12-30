const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { User } = require('../models/');
const { orderService } = require('../services');
const orderENUMS = {
  PENDING: 'PENDING',
  DELIVERED: 'DELIVERED',
  DISPATCHED: 'DISPATCHED',
};
const createOrder = catchAsync(async (req, res) => {
  let user;
  if (req.body._userID) {
    user = await User.findById({ _id: req.body._userID });
  } else {
    user = await User.create({
      firstName: req.body.personalInfo.firstName,
      lastName: req.body.personalInfo.lastName,
      country: req.body.personalInfo.country,
      address: req.body.personalInfo.streetAddress,
      city: req.body.personalInfo.city,
      postalCode: req.body.personalInfo.postalCode,
      phone: req.body.personalInfo.phone,
      email: req.body.personalInfo.email,
    });
  }
  console.log(user);
  const order = await orderService.createOrder({
    _userID: user.id,
    products: req.body.products,
    status: orderENUMS.PENDING,
    cost: req.body.cost,
    mobileNo: user.phone,
    orderNotes: req.body.orderNotes,
    delivery_location: user.streetAddress,
  });
  res.status(httpStatus.CREATED).send(order);
});

module.exports = {
  createOrder,
};
