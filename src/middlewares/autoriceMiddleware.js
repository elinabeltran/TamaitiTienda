function autoriceMiddleware(req, res, next) {

    if( typeof req.session.usuarioLogueado != "undefined"){
        next();
    }else{
        res.send ("Para acceder a esta página debes loguearte. ")
    }
    next()
}

module.exports = autoriceMiddleware;
