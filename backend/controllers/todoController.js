const Todo = require("../models/todoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const todoRes = Todo.find();
    const query = todoRes.select(
      "_id title type description priority deadline"
    );
    const todoItem = await query.exec();
    res.send(JSON.stringify(todoItem));
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occured while fetching all todos" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const deadline = new Date(req.query.deadline);
    Todo.create({
      title: req.query.title,
      type: req.query.typeID,
      description: req.query.description,
      priority: req.query.priority,
      deadline: deadline,
    });
    return;
  } catch (error) {
    res.status(500).json({ error: "An error occured while creating new todo" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.query._id;
    const result = await Todo.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting a todo" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = req.query.id;
    const deadline = new Date(req.query.deadline);
    const result = await Todo.findByIdAndUpdate(id, {
      title: req.query.title,
      type: req.query.typeID,
      description: req.query.description,
      priority: req.query.priority,
      deadline: deadline,
    });
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "An error occured while updating todo" });
  }
};
