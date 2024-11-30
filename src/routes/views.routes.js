const express = require('express');
const ProductManager = require('../dao/managers/product.manager');
const CartManager = require('../dao/managers/cart.manager');

const router = express.Router();

router.get('/products', async (req, res) => {
  const { limit, page, sort } = req.query;
  const options = {
    limit: parseInt(limit) || 10,
    page: parseInt(page) || 1,
    sort: sort === 'asc' ? 1 : sort === 'desc' ? -1 : null,
  };

  const products = await ProductManager.getAllProducts({}, options);
  res.render('products', { products, pagination: options });
});

router.get('/carts/:cid', async (req, res) => {
  const cart = await CartManager.getCartById(req.params.cid);
  res.render('carts', { cart });
});

router.get('/realtimeproducts', async (req, res) => {
  const products = await ProductManager.getAllProducts();
  res.render('realtimeproducts', { products });
});

module.exports = router;
