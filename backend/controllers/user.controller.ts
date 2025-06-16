const userService = require('../services/user.service');

class UserController {
    async getUser(req, res) {
        try {
            const users = await userService.getUser(); // Example method
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
}

module.exports = new UserController();