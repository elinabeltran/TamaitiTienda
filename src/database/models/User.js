module.exports = function (sequelize, dataTypes){
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(45),
            notNull: true
           
        },
        last_name: {
            type: dataTypes.STRING(45),
            notNull: true

        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },

        email: {
            type: dataTypes.STRING,
            notNull: true,
            unique: true
        },
        avatar: {
            type: dataTypes.STRING(45),
            notNull: true
        },

    }
    
    let config = {
        tableName: 'user',
        timestamps: true,
        underscored: true,
        paranoid: true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        User.belongsToMany(models.Product,{
            as:"products",
            through: "sale",
            foreignKey:"id_user",
            otherKey:"id_product",
            timestamps: true
        });
    }

    return User

}
