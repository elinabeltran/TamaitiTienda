function adminMiddleware(req, res, next) {

    if (typeof req.session.usuarioLogueado != "undefined" &&
        req.session.usuarioLogueado.rol == 1) {
        next();
    } else {
        res.redirect("../login")
    }
}

module.exports = adminMiddleware;
