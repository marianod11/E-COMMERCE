module.exports = (sequelize, DataTypes) => {
    let alias = "Product_Shoplist";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        shoplist_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        productPrice: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "product_shoplist",
        timestamps: false,
    }

    const Product_shoplist = sequelize.define(alias, cols, config)

    Product_shoplist.associate = function(models) {
        Product_shoplist.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id",
        });
        Product_shoplist.belongsTo(models.Shoplist, {
            as: "shoplist",
            foreignKey: "shoplist_id",
        });
    };
    return Product_shoplist;
};