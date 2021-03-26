function guestMdidleware(req, res, next) {

    if(req.session.usuarioLogueado == undefined){
        next();
    }else{

        let elMensaje="Esta página es solo para invitados, tu ya estás registrado";
        res.render ("pages/msgError", {elMensaje})    }
    
}


module.exports = guestMdidleware;