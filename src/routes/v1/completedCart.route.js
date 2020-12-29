const express = require('express');
const validate = require('../../middlewares/validate');
const complatedCartValidation = require('../../validations/');
const completeCartController = require('../../controllers/index');

const router = express.Router();

router.route('/').post(validate(complatedCartValidation.completedCart), completeCartController.createCompletedCart);
//   .get(validate(productValidation.getProducts), productController.getProducts);

// router
//   .route('/:productId')
//   .get(validate(productValidation.getproduct), productController.getproduct)
//   .patch(validate(productValidation.updateProduct), productController.updateProduct)
//   .delete(validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
