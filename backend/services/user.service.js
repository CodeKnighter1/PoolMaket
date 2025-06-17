const User = require('../models/user.model');

class UserServices {
    async getUser() {
        try {
            const users = await User.find(); // Use User, not userModel
            return users;
        } catch (error) {
            throw new Error('Failed to fetch users: ' + error.message);
        }
    }

    async createUser(user) {
        try {
            const newUser = await User.create(user); // Save to MongoDB
            return newUser;
        } catch (error) {
            throw new Error('Failed to create user: ' + error.message);
        }
    }

    async deleteUser(id) {
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                throw new Error('User not found');
            }
            return deletedUser;
        } catch (error) {
            throw new Error('Failed to delete user: ' + error.message);
        }
    }
}

module.exports = new UserServices();