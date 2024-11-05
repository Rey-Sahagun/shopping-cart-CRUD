const { Query } = require('mongoose');
const userService = require('../services/userService');

const userResolvers = {
    Query: {    
        users: () => {
            return userService.getAllUsers();
        }
    },

    Mutation: {
        createUser: (_, {fullName, email, password, address, phone, userType, preferredPayMethod}) => { 
            return userService.createUser(
                fullName, 
                email, 
                password, 
                address, 
                phone, 
                userType, 
                preferredPayMethod
            );
        }, 
        updateUser: (_, {id, fullName, email, password, address, phone, userType, preferredPayMethod}) => { 
            return userService.updateUser(
                id, 
                fullName, 
                email, 
                password, 
                address, 
                phone, 
                userType, 
                preferredPayMethod
            );
        },
        deleteUser: (_, {id}) => {
            return userService.deleteUser(id);
        }
    }
}

module.exports = userResolvers