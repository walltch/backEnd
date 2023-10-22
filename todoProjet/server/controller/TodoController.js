const TODO = require('../models/todo');

exports.createTodo = (req, res) => {
  const { title, description, urgence } = req.body;
  const newTodo = new TODO({
    title,
    description,
    urgence
  });

  newTodo.save()
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
};

exports.getTodoById = (req, res) => {
  const todoId = req.params.id;

  TODO.findById(todoId)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
      }
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: 'Tâche non trouvée' });
    });
};

exports.getAllTodos = (req, res) => {
  TODO.find({})
    .then(data => {
      if (!data || data.length === 0) {
        return res.status(404).json({ message: 'Aucune tâche trouvée' });
      }
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: 'Impossible de récupérer les tâches' });
    });
};

exports.updateTodoById = (req, res) => {
  const todoId = req.params.id;
  const { title, description, urgence } = req.body;

  TODO.findByIdAndUpdate(
    todoId,
    { title, description, urgence },
    { new: true }
  )
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
      }
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: 'Impossible de mettre à jour la tâche' });
    });
};

exports.deleteTodoById = (req, res) => {
  const todoId = req.params.id;
  TODO.findByIdAndRemove(todoId)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
      }
      res.json({ message: 'Tâche supprimée' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Impossible de supprimer la tâche' });
    });
};
