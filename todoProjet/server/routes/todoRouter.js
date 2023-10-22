const express = require('express');
const router = express.Router();
const todoController = require('../controller/TodoController');


router.post('/create', todoController.createTodo);
router.get('/', todoController.getAllTodos);
router.get('/todos', todoController.getTodoById);
router.put('/update/:id', todoController.updateTodoById);
router.delete('/delete/:id', todoController.deleteTodoById);

module.exports = router;
