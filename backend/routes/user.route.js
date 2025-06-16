// routes/user.route.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js'); // Ensure this path is correct
router.get('/user', userController.getUser);
module.exports = router;