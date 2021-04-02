const { check, validationResult, body } = require("express-validator");

module.exports =
[ 
check("name").isLength({ min: 4, max: 100 }).withMessage("El nombre debe estar completo."),
check("description").isLength({ min: 5, max: 500 }).withMessage("La descripción debe estar completo, al menos 5 caracteres."),
check("price").isLength({ min: 1, max: 11 }).withMessage("El precio debe ser numérico y completo."),
check("age").isLength({ min: 1, max: 45 }).withMessage("Debes seleccionar una edad sugerida."),
check("category").isLength({ min: 1, max: 45 }).withMessage("Debes seleccionar una categoría.")
]