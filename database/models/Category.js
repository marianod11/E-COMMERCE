module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
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
        tableName: "category",
        timestamps: false,
    }

    const Category = sequelize.define(alias, cols, config)

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "producto",
            foreignKey: "category_id",
        });
    };

    return Category
};