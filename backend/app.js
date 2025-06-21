const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// EventEmitter limitini oshirish
require('events').EventEmitter.defaultMaxListeners = 15;

const app = express();
const port = process.env.VITE_PORT || 8080;

// CORS sozlamasi: bir nechta originlarga ruxsat berish
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use('/api', require('./routes/card.route'));

app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.VITE_DB_URL, {
      serverSelectionTimeoutMS: 5000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

connectDb();