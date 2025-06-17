const cardModel = require("../models/card.model");

class CardServices {
    async getAllCards() {
        try {
            const allCards = await cardModel.find({});
            return allCards;
        } catch (error) {
            console.error('Error fetching cards:', error);
            throw new Error('Failed to fetch cards');
        }
    }

    async createCard(cardData) {
        try {
            const newCard = await cardModel.create(cardData);

            return newCard;
        } catch (error) {
            console.error('Error creating card:', error);
            throw new Error('Failed to create card');
        }
    }

    async deleteCard(id) {
        try {
            const card = await cardModel.findByIdAndDelete(id);
            return card;
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CardServices();