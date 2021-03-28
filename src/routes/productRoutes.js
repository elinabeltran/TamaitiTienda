const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddlewareImgProduct');
const path = require('path');
const productController = require('../controllers/productController');
const { check, validationResult, body } = require("express-validator");

const onlyAdmin = require('../middlewares/adminMiddleware');
const onlyUsers = require('../middlewares/autoriceMiddleware');


router.get('/', productController.index);
router.get('/search', productController.searchView);
router.get('/searchResults', productController.search);

router.get('/category/:id', productController.category);

router.get('/create', onlyAdmin, productController.boardCreate);
router.post('/create', onlyAdmin, upload.any(),onlyUsers,
  [ check("name").isLength({ min: 4, max: 100 }).withMessage("El nombre debe estar completo."),
    check("description").isLength({ min: 5, max: 500 }).withMessage("La descripción debe estar completo, al menos 5 caracteres."),
    check("price").isLength({ min: 1, max: 11 }).withMessage("El precio debe ser numérico y completo."),
    check("image").isEmpty().withMessage("Debes subir una imagen."),
    check("age").isLength({ min: 1, max: 45 }).withMessage("Debes seleccionar una edad sugerida."),
    check("category").isLength({ min: 1, max: 45 }).withMessage("Debes seleccionar una categoría.")
  ], productController.create);


router.get('/edit/:id',onlyAdmin, productController.edit);

router.put('/edit/:id',onlyAdmin, [
  check("name").isLength({ min: 4, max: 100 }).withMessage("El nombre debe estar completo."),
  check("description").isLength({ min: 5, max: 500 }).withMessage("La descripción debe estar completo, al menos 5 caracteres."),
  check("price").isLength({ min: 1, max: 11 }).isNumeric().withMessage("El precio debe ser numérico y completo."),
  check("age").isLength({ min: 1, max: 45 }).withMessage("Debes seleccionar una edad sugerida."),
  check("category").isLength({ min: 1, max: 45 }).withMessage("Debes seleccionar una categoría.")
], productController.update);

router.delete('/delete/:id', onlyAdmin, productController.delete);

router.get('/cart', productController.cart);

router.get('/:id',productController.detail);


// router.get('/category/:id', productController.category);



module.exports = router;