const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const port = process.env.PORT || 8080; // Changed from VITE_PORT
const app = express();
require('dotenv').config();
app.use(express.json());

app.use('/api/user', require('./routes/user.route'));

// Connect to DB
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL); // Changed from VITE_DB_URL
    console.log('Connected to DB');
    app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
  } catch (error) {
    console.error('DB Connection Error:', error);
    process.exit(1); // Exit on failure
  }
};

connectDb();