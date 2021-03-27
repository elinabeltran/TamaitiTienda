const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const validatorLoginMiddleware = require('../middlewares/validatorLoginMiddleware');
const guestMiddleware= require('../middlewares/guestMiddleware');


router.get('/', guestMiddleware, userController.boardLogin);
router.post('/', validatorLoginMiddleware,userController.login);

router.get('/check', 
function(req,res){
    console.log(req.session.usuarioLogueado)
    if (req.session.usuarioLogueado == undefined){
        res.send ("no estas logueado")
    }else{
        res.send ("Hola"+req.session.usuarioLogueado.rol)
   }
}
);

module.exports = router;