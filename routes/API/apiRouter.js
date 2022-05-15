var express = require("express");
var router = express.Router();

var apiController = require("../../controllers/API/apiController");

router.get("/products", apiController.products);
router.get("/products/:id", apiController.productDetail);
router.get("/users", apiController.users);
router.get("/users/:id", apiController.usersDetail)
router.get("/productTypes", apiController.productTypes);

module.exports = router;