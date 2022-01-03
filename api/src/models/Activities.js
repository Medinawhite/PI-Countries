const {DataTypes} =require ("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("activities",{
        id:{
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        dificulty:{
            type: DataTypes.STRING,
            validate:{
                min: 1,
                max: 5,
            }
        },
        duration:{
            type: DataTypes.STRING,
        },
        season:{
            type: DataTypes.ENUM("verano", "otoño", "invierno" , "primavera")
        }
    }, {timestamps: false});
}