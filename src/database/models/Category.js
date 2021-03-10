module.exports = function (sequelize, dataTypes){
    let alias = "Category";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(45),
            notNull: true
        }
    }
    
    let config = {
        tableName: 'category',
        timestamps: false,

    }

    const Category = sequelize.define(alias, cols, config)

    Category.associate = function(models){
         Category.hasMany(models.Product,{
             as:"products",
             foreignKey:"id_category"
         });
     }
     return Category

}