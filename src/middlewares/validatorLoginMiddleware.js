const { check, validationResult, body } = require("express-validator")


module.exports= [
    check("email").isEmail().withMessage("El email debe ser un email válido"),
    check("password").isLength({ min: 8, max:12}).withMessage("La contraseña debe tener mínimo 8 catacteres y 12 máximo."),
]