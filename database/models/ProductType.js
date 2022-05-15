module.exports = (sequelize, DataTypes) => {
    let alias = "ProductType";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    };
    let config = {
        tableName: "producttype",
        timestamps: false,
    }

    const ProductType = sequelize.define(alias, cols, config)

    ProductType.associate = function(models) {
        ProductType.hasMany(models.Product, {
            as: "producto",
            foreignKey: "productType_id",
        });
    };

    return ProductType;
};