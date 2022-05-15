const db = require("../../database/models");
const { path } = require("../../app");

const apiController = {
    products: async(req, res) => {
        let products = await db.Product.findAll({
            include: [
                "brand",
                "category",
                "productCondition",
                "colour",
                "productType",
            ],
        });
        let dataProduct = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                email: product.email,
                detailURL: `/api/products/${product.id}`
            };

        });
        let offers = await db.Product.findAll({
            where: { category_id: 1 },
        });
        let mostSelled = await db.Product.findAll({
            where: { category_id: 2 },
        });

        res.send({ count: products.length, ofertas: offers.length, masVendidos: mostSelled.length, user: dataProduct })
    },
    productDetail: async(req, res) => {
        let products = await db.Product.findByPk(req.params.id, {
            include: [
                "brand",
                "category",
                "productCondition",
                "colour",
                "productType",
            ],
        });
        let productDetail = {
            id: products.id,
            name: products.name,
            colour: products.colour.name,
            brand: products.brand.name,
            category: products.category.name,
            productCondition: products.productCondition.name,
            productType: products.productType.name,
            img: `/img/products/${products.img}`
        }
        res.send(productDetail)

    },
    users: async(req, res) => {
        let users = await db.User.findAll();
            let dateUser = users.map((user)=>{
                return {
                id: user.id,
                name: user.name,
                email: user.email,
                detailURL: `/api/users/${user.id}`
                };

        });
        res.send({count: users.length, user: dateUser})
    },
    productTypes: async(req, res) => {
        let productTypes = await db.ProductType.findAll();
        res.json(productTypes);
    },
    usersDetail: async(req, res) => {
        let detail = await db.User.findByPk(req.params.id);

        let userDetail = {
            id: detail.id,
            name: detail.name,
            lastName: detail.lastName,
            avatar: `/img/users/${detail.avatar}`
        }
        res.send(userDetail)

    },
};

module.exports = apiController;