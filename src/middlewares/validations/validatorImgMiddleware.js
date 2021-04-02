const { check, validationResult, body } = require("express-validator");
const path = require('path');

module.exports =
  [
    check('image').isEmpty().withMessage("Debes subir una imagen."),

    check('image')
      .custom((value, { req }) => {
        if (req.files[0].size > 1024000) {
          return false; 
        }
        else {
          return true; 
        }
      }).withMessage('Debes cargar una imagen menor a 1MB'),
         
      (res, req, next) => {
      next()
    },
    

  check('image')
  .custom((value, { req }) => {
    if (req.files[0].mimetype === 'image/jpg') {
      return '.jpg';
    } else if (req.files[0].mimetype === 'image/png') {
      return '.png';
    } else if (req.files[0].mimetype === 'image/jpeg') {
      return '.jpeg';
    }
    else {
      return false; 
    }
  })
  .withMessage('Debes carga una imagen con formato válido (JPG | PNG | JPEG)'),
  (res, req, next) => {
    next()
  },

      
  ]
