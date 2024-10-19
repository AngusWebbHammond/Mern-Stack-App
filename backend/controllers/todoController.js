const Todo = require('../models/todoModel')

exports.getAllTodos = async (req, res) => {
    try {
        const todoRes = Todo.find();
        const query = todoRes.select('_id title type description priority deadline');
        const todoItem = await query.exec();
        res.send(JSON.stringify(todoItem));
    } catch (error) {
        res.status(500).json({ error: 'An error occured while fetching all todos'})
    }
}

exports.createTodo = (req, res) => {
    try {
        const deadline = new Date(req.query.deadline);
        Todo.create({
            title: req.query.title,
            type: req.query.type,
            description: req.query.description,
            priority: req.query.priority,
            deadline: deadline
        })
    } catch (error) {
        res.status(500).json({ error: 'An error occured while creating new todo'})
    }
};