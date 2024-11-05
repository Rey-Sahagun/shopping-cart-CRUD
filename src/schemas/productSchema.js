const { gql } = require('apollo-server');

const productTypeDefs = gql`
    scalar Date    

    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        category: String!
        brand: String!
        quantity: Int
        createAt: Date
        image: [String]!
    }

    type Query {
        products: [Product!]!
    }

    type Mutation {
        createProduct(
        name: String!, 
        description: String!, 
        price: Float!, 
        category: String!, 
        brand: String!, 
        quantity: Int
        image: [String!]
        ): Product
        
        updateProduct(
        id: ID!, 
        name: String, 
        description: String, 
        price: Float, 
        category: String, 
        brand: String, 
        quantity: Int
        image: [String]
        ): Product
        
        deleteProduct(
        id: ID!
        ): Product
    }
`;

module.exports = productTypeDefs;