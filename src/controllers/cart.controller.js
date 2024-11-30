const CartManager = require('../dao/managers/cart.manager');

class CartController {
  async getCartById(req, res) {
    try {
      const cart = await CartManager.getCartById(req.params.cid);
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addProduct(req, res) {
    try {
      const { cid, pid } = req.params;
      const updatedCart = await CartManager.addProductToCart(cid, pid);
      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCart(req, res) {
    try {
      const { cid } = req.params;
      const { products } = req.body;
      const updatedCart = await CartManager.updateCart(cid, products);
      res.json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async removeProduct(req, res) {
    try {
      const { cid, pid } = req.params;
      const updatedCart = await CartManager.removeProductFromCart(cid, pid);
      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CartController();
