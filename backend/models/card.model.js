const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  size: { type: String, required: true },
  depth: { type: String, required: true },
  material: { type: String, required: true },
  condition: { type: String, required: true },
  location: { type: String, required: true },
  images: [{ type: String, required: true }],
  seller: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  category: { type: String, required: true },
  features: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  isFeatured: { type: Boolean, default: false },
});

module.exports = mongoose.model('Card', cardSchema);