// routes/user.route.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js'); // Ensure this path is correct

router.get('/get', userController.getUser);
router.post('/create', userController.createUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router;