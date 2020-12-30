const Joi = require('joi');
const { objectId } = require('./custom.validation');
const createOrder = {
  body: Joi.object().keys({
    personalInfo: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      country: Joi.string().required(),
      streetAddress: Joi.array().items(Joi.string().required()),
      city: Joi.string().required(),
      postalCode: Joi.string(),
      phone: Joi.string().required(),
      email: Joi.string().required(),
    }),
    orderNotes: Joi.string(),
    _userID: Joi.string().custom(objectId),
    products: Joi.array().items(
      Joi.object().keys({
        productId: Joi.string().custom(objectId).required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
      })
    ),
    cost: Joi.number(),
  }),
};
module.exports = {
  createOrder,
};
