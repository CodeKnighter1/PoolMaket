const userService = require('../services/user.service');

class UserController {
    async getUser(req, res) {
        try {
            const allUsers = await userService.getUser();
            res.status(200).send(allUsers);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internall server issue");
        }
    }

    async createUser(req, res) {
        try {
            const { fullName, email, password } = req.body;
            if (!fullName || !email || !password) {
                return res.status(400).send('All fields are required');
            }
            const NewUser = await userService.createUser(req.body);
            res.status(201).send(NewUser)
        } catch (error) {
            console.error(error);
            res.status(500).send('Not Found');
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).send('ID  is required')
            }
            const deleteUser = await userService.deleteUser(id);

            res.status(200).send(deleteUser)
        } catch (error) {

        }
    }
}

module.exports = new UserController();