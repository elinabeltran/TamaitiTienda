module.exports = function (sequelize, dataTypes){
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            notNull: true
           
        },
        description: {
            type: dataTypes.STRING(500),
            notNull: true

        },
        img_url: {
            type: dataTypes.STRING(100),
            notNull: false
        },
       price: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        age: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        id_category: {
            type: dataTypes.INTEGER,
            notNull: false
        },
        id_sale: {
            type: dataTypes.INTEGER,
            notNull: false
        }

    }
    
    let config = {
        tableName: 'product',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
 
    const Product = sequelize.define(alias, cols, config)

    // Product.associate = function(models){
    //     Product.belongsToMany(models.User,{
    //         as:"users",
    //         through: "sale",
    //         foreingKey:"id_product",
    //         otherKey:"id_user",
    //         timestamps: true
    //     });
    // }

    // Product.associate = function(models){
    //      Product.belongsTo(models.Category,{
    //          as:"category",
    //          foreingKey:"id_category"
    //      });
    //  }





    return Product

}

