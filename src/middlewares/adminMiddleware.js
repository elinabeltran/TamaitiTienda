function adminMiddleware(req, res, next) {

    if (typeof req.session.usuarioLogueado != "undefined" &&
        req.session.usuarioLogueado.rol == 1) {
        next();
    } else {
        let elMensaje="Esta página es sólo para administradores.";
        res.render ("pages/msgError", {elMensaje})    }
    }


module.exports = adminMiddleware;
