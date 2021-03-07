
module.exports = function (sequelize, dataTypes){
    let alias = "Sale";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        amount: {
            type: dataTypes.INTEGER,
           
        }

    }
    
    let config = {
        tableName: 'sale',
        timestamps: true,
        underscored: true,
        paranoid: true
    }
   
    const Sale = sequelize.define(alias, cols, config)
    
    return Sale

}


