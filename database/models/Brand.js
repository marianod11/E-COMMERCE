module.exports = (sequelize, DataTypes) => {
    let alias = "Brand";
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
        tableName: "brand",
        timestamps: false,
    }

    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = function(models) {
        Brand.hasMany(models.Product, {
            as: "producto",
            foreignKey: "brand_id",
        });
    };

    return Brand
};