function verSession(req, res, next) {
 console.log(req.session)
    next()
}

module.exports = verSession;