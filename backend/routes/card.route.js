const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card.controller');

router.get('/card', cardController.getCards);
router.post('/card/create', cardController.createCard);
router.delete('/card/delete/:id', cardController.deleteCard);
router.put('/card/update/:id', cardController.updateCard); // Assuming updateCard is implemented in the controller

module.exports = router;