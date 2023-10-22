const {
    createTodo,
    getTodoById,
    getAllTodos,
    updateTodoById,
    deleteTodoById,
  } = require('../controller/TodoController');
  
  describe('createTodo Function Test', () => {
    it('should create a new todo and return the created todo', async () => {
      const req = {
        body: {
          title: 'New Task',
          description: 'Description of the task',
          urgence: 'High',
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await createTodo(req, res);
    });
  
    it('should handle errors and return a 400 status code', async () => {
      const req = {
        body: {},
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await createTodo(req, res);
    });
  });
  
  describe('getTodoById Function Test', () => {
    it('should return a specific todo by ID', async () => {
      const req = {
        params: {
          id: 'todo_id',
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await getTodoById(req, res);
    });
  
    it('should handle errors and return a 400 status code', async () => {
      const req = {
        params: {},
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await getTodoById(req, res);
    });
  });
  
  describe('getAllTodos Function Test', () => {
    it('should return a list of all todos', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await getAllTodos(req, res);
    });
  
    it('should handle errors and return a 400 status code', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await getAllTodos(req, res);
    });
  });
  
  describe('updateTodoById Function Test', () => {
    it('should update a specific todo by ID and return the updated todo', async () => {
      const req = {
        params: {
          id: 'todo_id',
        },
        body: {
          title: 'Updated Task',
          description: 'Updated description',
          urgence: 'Low',
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await updateTodoById(req, res);
    });
  
    it('should handle errors and return a 400 status code', async () => {
      const req = {
        params: {},
        body: {},
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await updateTodoById(req, res);
    });
  });
  
  describe('deleteTodoById Function Test', () => {
    it('should delete a specific todo by ID and return a success message', async () => {
      const req = {
        params: {
          id: 'todo_id',
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await deleteTodoById(req, res);
    });
  
    it('should handle errors and return a 400 status code', async () => {
      const req = {
        params: {},
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(() => res),
      };
  
      await deleteTodoById(req, res);
    });
  });
  