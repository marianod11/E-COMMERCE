var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

const mainController = require("../controllers/mainController");
/* Ruta HOME */

router.get("/", mainController.main);

router.get("/todoslosproductos", mainController.todoslosproductos)

module.exports = router;