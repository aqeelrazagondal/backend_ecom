const express = require('express');
const validate = require('../../middlewares/validate');
const orderValidation = require('../../validations/order.validation');
const orderController = require('../../controllers/order.controller');

const router = express.Router();

router.route('/').post(validate(orderValidation.createOrder), orderController.createOrder);

// router
//   .route('/:productId')
//   .get(validate(productValidation.getproduct), productController.getproduct)
//   .patch(validate(productValidation.updateProduct), productController.updateProduct)
//   .delete(validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
