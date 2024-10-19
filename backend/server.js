const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./models/todoModel')

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  const todoRes = Todo.find(
    {"type": req.query.type}
  );
  const query = todoRes.select('_id title type description deadline');
  const todoItem = await query.exec();
  res.send(JSON.stringify(todoItem));
});

app.post('/', (req, res) => {
  const deadline = new Date(req.query.deadline);
  Todo.create(
    {
      title: req.query.title,
      type: req.query.type,
      description: req.query.description,
      deadline: deadline
    }
  )
  res.send("Added to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
    console.error("COULD NOT CONNECT TO DATABASE:", error.message);
  }
}

connectDB()
