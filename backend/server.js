const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./models/todoModel')

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  async function selectTodosByType(type) {
    const todoRes = Todo.find(
      {"type": type}
    );
    const query = todoRes.select('_id title type description deadline');
    const todoItem = await query.exec();
    res.send(JSON.stringify(todoItem));
  }
  selectTodosByType(req.query.type);
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

const createTodoItem = (title, type, description, deadline) => {Todo.create(
  {
    title: title,
    type: type,
    description: description,
    deadline: deadline
  })}
