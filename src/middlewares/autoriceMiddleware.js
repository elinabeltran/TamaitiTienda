function autoriceMiddleware(req, res, next) {

    if( typeof req.session.usuarioLogueado != "undefined"){
        next();
    }else{
        let elMensaje="Para acceder a esta página debes loguearte. ";
        res.render ("pages/msgError", {elMensaje})
    }
    next()
}

module.exports = autoriceMiddleware;
