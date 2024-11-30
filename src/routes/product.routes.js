const express = require('express');
const ProductController = require('../controllers/product.controller.js');

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:pid', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.delete('/:pid', ProductController.deleteProduct);

module.exports = router;
