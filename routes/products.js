var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
var { check, validationResult, body } = require("express-validator");
const productsController = require("../controllers/productsController");
const middlewareDB = require("../middleware/middlewareDB");
const middlewareAdmin = require("../middleware/middlewareAdmin");
var multer = require("multer");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/img/products");
    },
    filename: function(req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

var upload = multer({ storage: storage });

// Router al main de productos
router.get("/", productsController.main);

// Router al detalle del producto
router.get("/detail/:id", productsController.detail);

// Router al carrito de compras
router.get("/carritodecompras", middlewareDB, productsController.carrito);

// Router al formulario de artículos
router.get("/create", middlewareDB, productsController.formulario);
// Router que responde a post
router.post(
    "/create",
    upload.any(), [
        check("name").isLength({ min: 5 }).withMessage("debe nombre"),
        check("description")
        .isLength({ min: 20 })
        .withMessage("Descripcion demasiado breve"),
    ],
    productsController.create
);
// editar un artículo

router.get("/edit/:id", middlewareDB, productsController.edit);
router.post("/edit/:id",[ check("name").isLength({ min: 5 }).withMessage("debe nombre"),
    check("description")
        .isLength({ min: 20 })
        .withMessage("Descripcion demasiado breve")], productsController.update);

// listado completo
router.get("/list", productsController.list);

// delete de product

router.post("/delete/:id", productsController.delete);

module.exports = router;