const express = require('express');
const { check, validationResult, body } = require("express-validator")
const db = require('../database/models');
const guestMdidleware= require('../middlewares/guestMiddleware');
const upload = require('../middlewares/multerMiddleware');
const path = require('path');


const userController = require('../controllers/userController');
const router = express.Router();

router.get('/',guestMdidleware, userController.registerBoard);
router.post('/', upload.any(), [
  check("name").isLength({ min: 1 }).withMessage("El campo nombre debe estar completo"),
  check("lastName").isLength({ min: 1 }).withMessage("El campo apellido debe estar completo"),
  check("email").isEmail().withMessage("El email debe ser un email válido"),
  check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),

], userController.register);

router.get('/:id', userController.detail);
router.get('/edit/:id', userController.editBoard);
router.put('/update/:id', userController.update);



module.exports = router;