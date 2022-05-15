const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
let db = require("../database/models");
var { check, validationResult, body } = require("express-validator");
const { NotAcceptable } = require("http-errors");

const controller = {
    main: (req, res) => {
        res.render("mainproducts", {});
    },

    detail: async(req, res) => {
        let product = await db.Product.findByPk(req.params.id, {
            include: [
                "brand",
                "category",
                "productCondition",
                "colour",
                "productType",
            ],
        })
        console.log(product)
        res.render("detail_product", { product: product });
    },

    carrito: (req, res) => {
        res.render("carritodecompras", {});
    },

    formulario: async(req, res) => {
        let brand = await db.Brand.findAll();
        let category = await db.Category.findAll();
        let colour = await db.Colour.findAll();
        let productCondition = await db.ProductCondition.findAll();
        let productType = await db.ProductType.findAll();

        res.render("products_create_form", {
            brand: brand,
            category: category,
            colour: colour,
            productCondition: productCondition,
            productType: productType,
        });
    },

    create: async(req, res) => {
        let errors = validationResult(req);
        let brand = await db.Brand.findAll();
        let category = await db.Category.findAll();
        let colour = await db.Colour.findAll();
        let productCondition = await db.ProductCondition.findAll();
        let productType = await db.ProductType.findAll();
        if (errors.isEmpty()) {
            let nvoProduct = db.Product.create({
                name: req.body.name,
                brand_id: req.body.brand_id,
                releaseYear: req.body.releaseYear,
                productCondition_id: req.body.productCondition_id,
                colour_id: req.body.colour_id,
                productType_id: req.body.productType_id,
                category_id: req.body.category_id,
                stock: req.body.stock,
                price: req.body.price,
                dicount: req.body.discount,
                description: req.body.description,
                img: req.files[0].filename,
            });
            NotAcceptable
            res.redirect("/products/list");
        } else {
            res.render("products_create_form", {
                errors: errors.errors,
                brand: brand,
                category: category,
                colour: colour,
                productCondition: productCondition,
                productType: productType,
            });
        }
    },

    list: async(req, res) => {
        db.Product.findAll().then(function(product) {
            res.render("list_product", { product: product });
        });
    },
    //EDITAR PRODUCT PUT
    edit: async(req, res) => {
        let brand = await db.Brand.findAll();
        let category = await db.Category.findAll();
        let colour = await db.Colour.findAll();
        let productCondition = await db.ProductCondition.findAll();
        let productType = await db.ProductType.findAll();
        db.Product.findByPk(req.params.id, {
            include: [
                "brand",
                "category",
                "productCondition",
                "colour",
                "productType",
            ],
        }).then(function(product) {
            res.render("products_edit_form", {
                product: product,
                brand: brand,
                category: category,
                colour: colour,
                productCondition: productCondition,
                productType: productType,
            });
        });
    },

    update: async(req, res) => {
        let errors = validationResult(req);
        let brand = await db.Brand.findAll();
        let category = await db.Category.findAll();
        let colour = await db.Colour.findAll();
        let productCondition = await db.ProductCondition.findAll();
        let productType = await db.ProductType.findAll();
        let product = await db.Product.findAll();
        if (errors.isEmpty()) {
            let updateProduct = db.Product.update({
                name: req.body.name,
                brand_id: req.body.brand_id,
                releaseYear: req.body.releaseYear,
                productCondition_id: req.body.productCondition_id,
                colour_id: req.body.colour_id,
                productType_id: req.body.productType_id,
                category_id: req.body.category_id,
                stock: req.body.stock,
                price: req.body.price,
                dicount: req.body.discount,
                description: req.body.description
            })
            res.redirect("/products/edit/" + req.params.id );
        } else {
            res.render("products_edit_form", {
                errors: errors.errors,
                brand: brand,
                category: category,
                colour: colour,
                productCondition: productCondition,
                productType: productType,
                product: product
            });
        }
    },

    delete: async(req, res) => {
        let deleteProduct = await db.Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.redirect("/products/list");
    },
};

module.exports = controller;