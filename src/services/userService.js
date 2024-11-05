const User = require('../models/userModel');

module.exports = {
    getAllUsers: async () => {
        return await User.find();
    },
    
    createUser: async (fullName, email, password, address, phone, userType, preferredPayMethod) => {
        const user = new User({fullName, email, password, address, phone, userType, preferredPayMethod});
        return await user.save();
    },
    updateUser: async (id, fullName, email, password, address, phone, userType, preferredPayMethod) => {
        return await User.findByIdAndUpdate(id, {fullName, email, password, address, phone, userType, preferredPayMethod});
    },

    deleteUser: async (id) => {
        return await User.findByIdAndDelete(id);
    },

}