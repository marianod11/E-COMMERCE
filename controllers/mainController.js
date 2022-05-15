const express = require("express");
const app = express();
const { productsFilePath, getProducts } = require("../utils/_products");
const fs = require("fs");
const path = require("path");
let db = require("../database/models");

/*declaro variable a modo de ejemplo*/

const controller = {
  main: async (req, res) => {
    let offers = await db.Product.findAll({
      where: { category_id: 1 },
      limit: 3,
    });
    let mostSelled = await db.Product.findAll({
      where: { category_id: 2 },
      limit: 3,
    });

    res.render("index", { offers, mostSelled });
  },
  todoslosproductos: async (req, res) =>{
    let todoslosproductos = await db.Product.findAll();
    res.render("todoslosproductos", { todoslosproductos})
  }
};


module.exports = controller;
