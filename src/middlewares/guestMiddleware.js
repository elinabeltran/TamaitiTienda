function guestMdidleware(req, res, next) {

    if(req.session.usuarioLogueado == undefined){
        next();
    }else{
        res.send ("Esta página es solo para invitados, tu ya estás registrado")
    }
    
}

module.exports = guestMdidleware;