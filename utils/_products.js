const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products-db.json");

function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
}

module.exports = { productsFilePath, getProducts };