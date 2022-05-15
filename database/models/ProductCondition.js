module.exports = (sequelize, DataTypes) => {
    let alias = "ProductCondition";
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
        tableName: "productcondition",
        timestamps: false,
    }

    const ProductCondition = sequelize.define(alias, cols, config)

    ProductCondition.associate = function(models) {
        ProductCondition.hasMany(models.Product, {
            as: "producto",
            foreignKey: "productCondition_id",
        });
    };

    return ProductCondition;
};