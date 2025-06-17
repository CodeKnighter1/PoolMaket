const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    depth: { type: String, required: true },
    material: { type: String, required: true },
    condition: { type: String, enum: ['new', 'excellent', 'good', 'fair'], required: true },
    location: { type: String, required: true },
    images: { type: [String], required: true },
    seller: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    category: { type: String, enum: ['above-ground', 'in-ground', 'infinity', 'kiddie', 'hot-tub'], required: true },
    features: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('Card', cardSchema);