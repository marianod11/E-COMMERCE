module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        modelType: {
            type: DataTypes.STRING,
        },
        modelName: {
            type: DataTypes.STRING,
        },
        releaseYear: {
            type: DataTypes.DATE,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        discount: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        category_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        productType_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        brand_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        colour_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        productCondition_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
    };
    let config = {
        tableName: "product",
        timestamps: false,
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "brand_id",
        });
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id",
        });
        Product.belongsTo(models.ProductCondition, {
            as: "productCondition",
            foreignKey: "productCondition_id",
        });
        Product.belongsTo(models.ProductType, {
            as: "productType",
            foreignKey: "productType_id",
        });
        Product.belongsTo(models.Colour, {
            as: "colour",
            foreignKey: "colour_id",
        });
        Product.hasMany(models.Product_Shoplist, {
            as: "productShoplist",
            foreignKey: "product_id",
        });
    };

    return Product;
};