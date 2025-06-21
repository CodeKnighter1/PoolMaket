const cardModel = require('../models/card.model');

class CardService {
  async getCards() {
    try {
      return await cardModel.find({});
    } catch (error) {
      throw new Error('Failed to fetch cards');
    }
  }

  async createCard(cardData) {
    try {
      return await cardModel.create(cardData);
    } catch (error) {
      throw new Error('Failed to create card');
    }
  }

  async deleteCard(id) {
    try {
      const card = await cardModel.findByIdAndDelete(id);
      if (!card) {
        throw new Error('Card not found');
      }
      return card;
    } catch (error) {
      throw new Error('Failed to delete card');
    }
  }

  async updateCard(id, cardData) {
    try {
      const card = await cardModel.findByIdAndUpdate(id, cardData, { new: true });
      if (!card) {
        throw new Error('Card not found');
      } 
      return card;
    } catch (error) {
      throw new Error('Failed to update card');
    } 
  }
  
}

module.exports = new CardService();