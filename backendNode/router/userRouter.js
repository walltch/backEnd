const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


router.get('/', userController.findAll);
router.post('/create', userController.create);
router.post('/login', userController.login);
router.delete('/delete/:_id', userController.deleteById);
router.put('/update/:_id', userController.updateById);

module.exports = router;