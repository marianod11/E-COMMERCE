function middlewareDB(req, res, next) {
    if (req.session.userLogueado != undefined) {
        next();
    } else {
        res.render("login");
    }
}

module.exports = middlewareDB;