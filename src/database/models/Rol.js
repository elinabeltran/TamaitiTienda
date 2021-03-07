module.exports = function (sequelize, dataTypes){
    let alias = "Rol";

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
        tableName: 'rol',
        timestamps: false,

    }

    const Rol = sequelize.define(alias, cols, config)

    // Rol.associate = function(models){
    //     Rol.hasMany(models.User,{
    //         as:"users",
    //         foreingKey:"id_rol"
    //     })
    // }

    return Rol

}