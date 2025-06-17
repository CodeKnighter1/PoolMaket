const express = require('express');
const cardController = require('../controllers/card.controller');
const router = express.Router();

router.get('/get', cardController.getAllCards);
router.post('/create', cardController.createCard);
router.delete('/delete/:id', cardController.deletecard);



module.exports = router;