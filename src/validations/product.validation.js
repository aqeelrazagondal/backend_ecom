const Joi = require('joi');
const { password, objectId } = require('./custom.validation');
const createProduct = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string().required(),
    subCategory: Joi.string(),
    price: Joi.number().required(),
    old_price: Joi.number(),
    description: Joi.string().required(),
    _vendorID: Joi.string().custom(objectId),
    images: Joi.array().items(Joi.string()),
    termsAndConditions: Joi.string(),
    highlights: Joi.string(),
    isPopular: Joi.boolean(),
    favCount: Joi.number(),
    isOutOfStock: Joi.boolean(),
  }),
};
const getProducts = {
  query: Joi.object().keys({
    category: Joi.string(),
    subCategory: Joi.string(),
    price: Joi.number(),
    _vendorID: Joi.string().custom(objectId),
    isPopular: Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().required(),
      content: Joi.string().required(),
      category: Joi.string().required(),
      subCategory: Joi.string(),
      price: Joi.number().required(),
      old_price: Joi.number(),
      description: Joi.string().required(),
      _vendorID: Joi.string().custom(objectId),
      images: Joi.array().items(Joi.string()),
      termsAndConditions: Joi.string(),
      highlights: Joi.string(),
      isPopular: Joi.boolean(),
      favCount: Joi.number(),
      isOutOfStock: Joi.boolean(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
