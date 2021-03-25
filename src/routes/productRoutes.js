const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddlewareImgProduct');
const path = require('path');
const productController = require('../controllers/productController');
const { check, validationResult, body } = require("express-validator")



router.get('/', productController.index);
router.get('/create', productController.boardCreate);
router.post('/create',upload.any(),
[
    check("name").isLength({ min: 4 ,  max: 100}).withMessage("El nombre debe estar completo."),
    check("description").isLength({ min: 5 ,  max: 500}).withMessage("La descripción debe estar completo, al menos 5 caracteres."),
    check("price").isLength({ min: 1 , max: 11}).isNumeric().withMessage("El precio debe ser numérico y completo."),
    check("age").isLength({ min: 1 , max:45}).withMessage("Debes seleccionar una edad sugerida."),
    check("category").isLength({ min: 1 , max:45}).withMessage("Debes seleccionar una categoría.")
  
  ],productController.create);
router.get('/edit/:id', productController.edit);
router.put('/edit/:id',[
    check("name").isLength({ min: 4 ,  max: 100}).withMessage("El nombre debe estar completo."),
    check("description").isLength({ min: 5 ,  max: 500}).withMessage("La descripción debe estar completo, al menos 5 caracteres."),
    check("price").isLength({ min: 1 , max: 11}).isNumeric().withMessage("El precio debe ser numérico y completo."),
    check("age").isLength({ min: 1 , max:45}).withMessage("Debes seleccionar una edad sugerida."),
    check("category").isLength({ min: 1 , max:45}).withMessage("Debes seleccionar una categoría.")
  
  ], productController.update);
router.delete('/delete/:id', productController.delete);
router.get('/search', productController.searchView);
router.get('/searchResults', productController.search);
router.get('/cart', productController.cart);
router.get('/:id', productController.detail);
// router.get('/category/:id', productController.category);



module.exports = router;