const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.boardLogin);
router.post('/', userController.login);


module.exports = router;