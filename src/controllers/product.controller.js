const ProductManager = require('../dao/managers/product.manager');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await ProductManager.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await ProductManager.getProductById(req.params.pid);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const { code } = req.body;
      const existingProduct = await ProductManager.findByCode(code);
      if (existingProduct)
        return res.status(400).json({ message: 'Product code already exists' });

      const newProduct = await ProductManager.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const deletedProduct = await ProductManager.deleteProduct(req.params.pid);
      if (!deletedProduct)
        return res.status(404).json({ message: 'Product not found' });
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();
