const Product = require('../models/products.js');

class ProductManager {
  async getAllProducts(filters = {}, options = {}) {
    const { limit = 10, page = 1, sort } = options;
    const query = Product.find(filters);
    if (sort) query.sort({ price: sort });
    return await query.limit(limit).skip((page - 1) * limit).exec();
  }

  async getProductById(id) {
    return await Product.findById(id);
  }

  async findByCode(code) {
    return await Product.findOne({ code });
  }

  async createProduct(data) {
    return await Product.create(data);
  }

  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductManager();
