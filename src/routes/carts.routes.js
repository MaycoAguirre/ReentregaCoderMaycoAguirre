const express = require('express');
const CartController = require('../controllers/cart.controller');

const router = express.Router();

router.get('/:cid', CartController.getCartById);
router.post('/:cid/products/:pid', CartController.addProduct);
router.put('/:cid', CartController.updateCart);
router.delete('/:cid/products/:pid', CartController.removeProduct);

module.exports = router;
