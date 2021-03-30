const express = require('express');
const { check, validationResult, body } = require("express-validator")
const userController = require('../controllers/userController');
const router = express.Router();

const onlyUsers = require('../middlewares/autoriceMiddleware');
const guestMiddleware= require('../middlewares/guestMiddleware');
const upload = require('../middlewares/multerMiddleware');


router.get('/',guestMiddleware, userController.registerBoard);
router.post('/', upload.any(), [
  check("name").isLength({ min: 1 }).withMessage("El campo nombre debe estar completo"),
  check("lastName").isLength({ min: 1 }).withMessage("El campo apellido debe estar completo"),
  check("email").isEmail().withMessage("El email debe ser un email válido"),
  check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),

], userController.register);

router.get('/:id', onlyUsers, userController.detail);
router.get('/edit/:id',onlyUsers, userController.editBoard);
router.put('/update/:id',onlyUsers, userController.update);


module.exports = router;