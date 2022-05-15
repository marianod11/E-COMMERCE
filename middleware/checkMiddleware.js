function checkMiddleware(req, res, next) {
    res.locals.user = req.session.userLogueado;
    next();
};

module.exports = checkMiddleware;