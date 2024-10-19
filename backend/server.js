const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5050;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
    console.error("COULD NOT CONNECT TO DATABASE:", error.message);
  }
}

connectDB()

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', todoRoutes);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});