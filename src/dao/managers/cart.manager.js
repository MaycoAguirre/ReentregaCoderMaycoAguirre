const Cart = require('../models/carts');

class CartManager {
  async getCartById(id) {
    return await Cart.findById(id).populate('products.product');
  }

  async addProductToCart(cartId, productId) {
    const cart = await Cart.findById(cartId);
    const productIndex = cart.products.findIndex(
      (p) => p.product.toString() === productId
    );

    if (productIndex !== -1) {
      cart.products[productIndex].quantity += 1;
    } else {
      cart.products.push({ product: productId });
    }

    return await cart.save();
  }

  async updateCart(cartId, products) {
    const cart = await Cart.findById(cartId);
    cart.products = products;
    return await cart.save();
  }

  async removeProductFromCart(cartId, productId) {
    const cart = await Cart.findById(cartId);
    cart.products = cart.products.filter(
      (p) => p.product.toString() !== productId
    );
    return await cart.save();
  }
}

module.exports = new CartManager();
