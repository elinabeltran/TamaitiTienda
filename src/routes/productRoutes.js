const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddleware');
const path = require('path');
const productController = require('../controllers/productController');
const { check, validationResult, body } = require("express-validator")



router.get('/', productController.index);
router.get('/create', productController.boardCreate);
router.post('/create',upload.any(),
// [
//     check("name").isLength({ min: 5 }).withMessage("El campo nombre debe estar completo con al menos 5 caracteres"),
//     check("description").isLength({ min: 20 }).withMessage("El campo description debe estar completo con al menos 20 caracteres"),
// ],
productController.create);
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);
router.delete('/delete/:id', productController.delete);
router.get('/search', productController.searchView);
router.get('/searchResults', productController.search);
router.get('/cart', productController.cart);
router.get('/:id', productController.detail);


module.exports = router;