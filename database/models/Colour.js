module.exports = (sequelize, DataTypes) => {
    let alias = "Colour";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    }
    let config = {
        tableName: "colour",
        timestamps: false,
    };

    const Colour = sequelize.define(alias, cols, config)

    Colour.associate = function(models) {
        Colour.hasMany(models.Product, {
            as: "producto",
            foreignKey: "colour_id",
        });
    };

    return Colour
};