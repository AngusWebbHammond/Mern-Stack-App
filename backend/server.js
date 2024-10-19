const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./models/todoModel')
const TodoTypes = require('./models/todoTypeModel')

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(cors());

app.get('/todo/get/all', async (req, res) => {
  const todoRes = Todo.find();
  const query = todoRes.select('_id title type description priority deadline');
  const todoItem = await query.exec();
  res.send(JSON.stringify(todoItem));
});

app.get('/todo/get/types', async (req, res) => {
  const todoRes = TodoTypes.find();
  const query = todoRes.select('title');
  const todoTypes = await query.exec();
  const todoUniqueTypes = [];
  todoTypes.map((item) => {
    todoUniqueTypes.push(item.title);
  })
  res.send(JSON.stringify(todoUniqueTypes));
})

app.post('/todo/create', (req, res) => {
  const deadline = new Date(req.query.deadline);
  Todo.create(
    {
      title: req.query.title,
      type: req.query.type,
      description: req.query.description,
      priority: req.query.priority,
      deadline: deadline
    }
  )
  TodoTypes.create(
    {
      title: req.query.type
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
