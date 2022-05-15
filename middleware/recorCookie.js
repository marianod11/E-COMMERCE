const { registerFilePath, getRegister } = require("../utils/_register");

function recorCookie(req, res, next) {
    if (req.cookies.recordame != undefined && req.session.user == undefined) {
        let getUsers = getRegister(registerFilePath);
        let usuarioLoguarse = null;
        for (let i = 0; i < getUsers.length; i++) {
            if (getUsers[i].email == req.cookies.recordame) {
                usuarioLoguarse = getUsers[i]
            }
        }
        req.session.usuarioALoguarse = usuarioLoguarse
    }
    next();
}


module.exports = recorCookie