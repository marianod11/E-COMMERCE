var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");
var fs = require("fs");
var bcrypt = require("bcrypt");
var { check, validationResult, body } = require("express-validator");
const { registerFilePath, getRegister } = require("../utils/_register");
const userController = require("../controllers/userController");
const middlewareAdmin = require("../middleware/middlewareAdmin");
const middlewareDB = require("../middleware/middlewareDB");
let db = require("../database/models");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/img/users");
    },
    filename: function(req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

var upload = multer({ storage: storage });

// Router al main de users
router.get("/", userController.main);
// Router al registro de usuarios
router.get("/register", userController.register);
router.post(
    "/register",
    upload.any(), [
        check("email").isEmail().withMessage("debe email"),
        check("name").isLength({ min: 2 }).withMessage("debe nombre"),
        check("lastname").isLength({ min: 2 }).withMessage("debe apellido"),
        check("date").isLength().withMessage("debe date"),
        check("pass").isLength({ min: 8 }).withMessage("debe contraseña"),
        body("email")
        .custom(async function(value) {
            console.log(value);
            let userRegister = await db.User.findOne({ where: { email: value } });
            if (userRegister == null) {
                return true;
            }
            throw new Error();
        })
        .withMessage("usuario ya existe"),
    ],
    userController.procesRegister
);
router.get("/login", userController.login);
router.post(
    "/login", [
        check("email").isEmail().withMessage("email invalido"),
        check("password")
        .isLength({ min: 8 })
        .withMessage("la contraseña incompleta"),
    ],
    userController.procesLogin
);
router.get("/list", userController.list);

router.post("/cerrarsesion", middlewareDB, userController.cerrarsesion);

router.get("/miperfil", middlewareDB, userController.miperfil);


module.exports = router;