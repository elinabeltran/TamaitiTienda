const express = require('express');
const multer = require('multer');
const path = require('path');
const { check, validationResult, body } = require("express-validator")
const db = require('../database/models');



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/uploads/avatar_user'))
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.registerBoard);
router.post('/', upload.any(), [
  check("name").isLength({ min: 1 }).withMessage("El campo nombre debe estar completo"),
  check("lastName").isLength({ min: 1 }).withMessage("El campo apellido debe estar completo"),
  check("email").isEmail().withMessage("El email debe ser un email válido"),
  check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
  // body("email").custom(
  //   function (value) {
  //   db.User.findOne({
  //     where: {
  //       email: value
  //     }
  //   })
  //     .then(function (resultado) {
  //       if (!resultado == null) {
  //         return true;
  //      }       return false

  //      })
  //   }).withMessage("El email de usuario ya existe."),

], userController.register);

router.get('/:id', userController.detail);
router.get('/edit/:id', userController.editBoard);
router.put('/update/:id', userController.update);



module.exports = router;