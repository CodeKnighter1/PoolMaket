const cardService = require("../services/card.service");

class Cardcontroller {
    async getAllCards(req, res, next) {
        try {
            const allCards = await cardService.getAllCards();
            res.status(200).json(allCards);
        } catch (error) {
            next(error);
        }
    }

    async createCard(req, res, next) {
        try {
            const cardData = req.body;
            const newCard = await cardService.createCard(cardData);
            res.status(201).json(newCard);
        } catch (error) {
            next(error);
        }
    }

    async deletecard(req, res, next) {
        try {
            const card = await cardService.deleteCard(req.params.id);
            res.status(200).json({ message: "Card deleted successfully", card });
            return card
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Cardcontroller();