module.exports = function (req, res, next) {
    //// res local es una variable que pueden recuperar en la vista
    if( typeof req.session.usuarioLogueado != "undefined"){
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    }
    next()
}

