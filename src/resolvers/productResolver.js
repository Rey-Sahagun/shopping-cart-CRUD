const { Query } = require('mongoose');
const productService = require('../services/productService');

const productResolvers = {
    Query: {
        products: () => {
            return productService.getAllProducts();
        } 
    },
    Mutation: {
        createProduct: (_, {name, description, price, category, brand, quantity, image}) => {
            return productService.createProduct(
                name, 
                description, 
                price, 
                category, 
                brand,
                quantity,
                image
            ); 
        },
        
        updateProduct: (_, {id, name, description, price, category, brand, quantity, image}) => {
            return productService.updateProduct(
                id,
                name, 
                description, 
                price, category, 
                brand, 
                quantity, 
                image
            );
        },
        
        deleteProduct: (_, {id}) => {
            return productService.deleteProduct(id);
        }
    }
};

module.exports = productResolvers;