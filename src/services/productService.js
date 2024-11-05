const Product = require('../models/productModel');

module.exports = {
    getAllProducts: async () => {
        return await Product.find();
    },
    createProduct: async (name, description, price, category, brand, quantity,image) => {
        const product = new Product({name, description, price, category, brand, quantity, image});
        return await product.save();
    },

    updateProduct: async (id, name, description, price, category, brand, quantity, image) => {
        return await Product.findByIdAndUpdate(id, {name, description, price, category, brand, quantity, image});
    },

    deleteProduct: async (id) => {
        return await Product.findByIdAndDelete(id);
    }
}