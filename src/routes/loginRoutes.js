const express = require('express');
const { check, validationResult, body } = require("express-validator")

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.boardLogin);
router.post('/', [
    check("email").isEmail().withMessage("El email debe ser un email válido"),
    check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres."),
],userController.login);


module.exports = router;