const cardService = require('../services/card.service');
const { z } = require('zod');

const CardSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be positive'),
  size: z.string().min(1, 'Size is required'),
  depth: z.string().min(1, 'Depth is required'),
  material: z.string().min(1, 'Material is required'),
  condition: z.string().min(1, 'Condition is required'),
  location: z.string().min(1, 'Location is required'),
  images: z.array(z.string().url()).min(1, 'At least one image is required'),
  seller: z.object({
    name: z.string().min(1, 'Seller name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(1, 'Phone is required'),
  }),
  category: z.string().min(1, 'Category is required'),
  features: z.array(z.string()).optional(),
  createdAt: z.string().datetime(),
  isFeatured: z.boolean(),
});

class CardController {
  async getCards(req, res) {
    try {
      const cards = await cardService.getCards();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cards' });
    }
  }

  async createCard(req, res) {
    try {
      const data = CardSchema.parse(req.body);
      const newCard = await cardService.createCard(data);
      res.status(201).json({ message: 'Card created', card: newCard });
    } catch (error) {
      res.status(400).json({ error: error.errors || error.message });
    }
  }

  async deleteCard(req, res, next) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({ error: 'Card ID is required' });
      }
      const deletedCard = await cardService.deleteCard(id);
      res.status(200).json({ message: 'Card deleted', card: deletedCard });
    } catch (error) {
      next(error);
    }
  }

  async updateCard(req, res, next) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({ error: 'Card ID is required' });
      }
      const data = CardSchema.parse(req.body);
      const updatedCard = await cardService.updateCard(id, data);
      res.status(200).json({ message: 'Card updated', card: updatedCard });
    } catch (error) {
      res.status(400).json({ error: error.errors || error.message });
    }
  }
}

module.exports = new CardController();