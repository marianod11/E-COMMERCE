module.exports = (sequelize, DataTypes) => {
    let alias = "Shoplist";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        shopDate: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "shoplist",
        timestamps: false,
    }

    const Shoplist = sequelize.define(alias, cols, config)

    Shoplist.associate = function(models) {
        Shoplist.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
        });
        Shoplist.hasMany(models.Product_Shoplist, {
            as: "productShoplist",
            foreignKey: "shoplist_id",
        });
    };

    return Shoplist;
};