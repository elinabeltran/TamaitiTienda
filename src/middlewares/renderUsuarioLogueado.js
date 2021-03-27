module.exports = function (req, res, next) {
    //// res local es una variable que pueden recuperar en la vista
    if( typeof req.session.usuarioLogueado != "undefined"){
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    }
    next()
}

/// agregar el rol en tabla y en las VISTAS pregunto si rol es 0 o 1 - si es uno veo los configuraciones
