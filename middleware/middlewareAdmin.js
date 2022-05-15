function middlewareAdmin(req, res, next) {

    if (req.session.userLogueado.isAdmin != undefined) {
        next();
    } else {
        res.render("login");
    }
}

module.exports = middlewareAdmin;