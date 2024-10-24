const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const todoTypeController = require('../controllers/todoTypeController');

router.get('/todo/get/all', todoController.getAllTodos);
router.get('/todo/get/types', todoTypeController.getAllTodoTypes);
router.post('/todo/create', async (req, res) => {
    try {
      todoController.createTodo(req, res);
      const todoTypes = await todoTypeController.getTodoTypes();
      const todoTypesOnly = todoTypes.map((item) => item.title);
      if (!todoTypesOnly.includes(req.query.type)) {
        todoTypeController.createTodoType(req, res);
      }
      res.send("Successfully added to DB").status(200);
      return;
    } catch (error) {
      res.status(500).json({ error: 'An error occured while adding to DB'})
      console.log("An error occured while adding to DB")
    }
});
router.delete('/todo/delete', todoController.deleteTodo);
router.post('/todo/list/create', todoTypeController.createTodoType);
router.delete('/todo/list/delete', todoTypeController.deleteTodoType)

module.exports = router;