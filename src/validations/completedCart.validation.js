const Joi = require('joi');
const { objectId } = require('./custom.validation');
const completedCart = {
  body: Joi.array().items({
    _userID: Joi.string().custom(objectId),
    _productIDArray: Joi.array().items(Joi.string().custom(objectId)),
    quantityArray: Joi.array().items(Joi.number()),
    cost: Joi.number().required(),
  }),
};

module.exports = {
  completedCart,
};
