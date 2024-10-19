const TodoTypes = require('../models/todoTypeModel')

exports.getTodoTypes = async () => {
    const todoRes = TodoTypes.find();
    const query = todoRes.select('title');
    const todoTypes = await query.exec();
    const todoUniqueTypes = [];
    todoTypes.map((item) => {
        todoUniqueTypes.push(item.title);
    })
    const tempTodoUniqueTypes = JSON.stringify(todoUniqueTypes);
    return tempTodoUniqueTypes;
}

exports.getAllTodoTypes = async (req, res) => {
    try {
        todoUniqueTypes = await this.getTodoTypes();
        res.send(todoUniqueTypes);
    } catch (error) {
        res.status(500).json({ error: 'An error occured while fetching all todo types'});
    }
}

exports.createTodoType = async (req, res) => {
    try {
        const todoTypes = await this.getTodoTypes();
        if (!todoTypes.includes(req.query.type)) {
            await TodoTypes.create({
                title: req.query.type
            })        
            res.send("Type Created Successfully")
            return;
        }
        res.send("Type already added")
    } catch (error) {
        res.status(500).json({ error: 'An error occured while creating todo type'});
    }
}
