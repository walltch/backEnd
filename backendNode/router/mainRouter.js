const express = require('express');
const router = express.Router();
const mainController = require('../controllers/MainController');

router.get('/', mainController.findAll);

module.exports = router;

