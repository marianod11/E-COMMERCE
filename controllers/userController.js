const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
var { check, validationResult, body } = require("express-validator");
let db = require("../database/models");

const controller = {
  main: (req, res) => {
    res.render("mainusers", {});
  },

  register: (req, res) => {
    res.render("registro", {});
  },
  procesRegister: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let user = await db.User.create({
        name: req.body.name,
        lastName: req.body.lastname,
        birthDate: req.body.birthDate,
        email: req.body.email,
        pass: bcrypt.hashSync(req.body.pass, 10),
        avatar: req.files[0].filename,
        accessLevel: 1,
      });

      req.session.userLogueado = user;
      return res.redirect("/");
    } else {
      return res.render("registro", { errors: errors.errors });
    }
  },
  login: (req, res) => {
    res.render("login");
  },
  procesLogin: async (req, res) => {
    let errors = validationResult(req);
    let user = null;
    if (errors.isEmpty()) {
      let user = await db.User.findOne({ where: { email: req.body.email } });
      let pass = await bcrypt.compare(req.body.password, user.pass);
      if (!pass) {
        user = null;
      }

      if (user == null) {
        return res.render("login", {
          errors: [{ msg: "Los datos ingresados no son validos" }],
        });
      } else {
        req.session.userLogueado = user;
        console.log(req.session.userLogueado);
        if (req.body.recordame != undefined) {
          res.cookie("recordame", user.email, { maxAge: 60000 });
        }
        res.redirect("/");
      }
    } else {
      res.render("login", { errors: errors.errors });
    }
  },
  list: (req, res) => {
    db.Brand.findAll().then(function (brand) {
      res.render("userlist", { brand: brand });
    });
  },
  cerrarsesion: (req, res) => {
    if (req.session.userLogueado != undefined) {
      req.session.destroy(function (err) {
        res.redirect("/");
      });
    } else {
      res.redirect("/users/login");
    }
  },
  miperfil: (req, res) => {
    res.render("perfil");
  },
};

module.exports = controller;
