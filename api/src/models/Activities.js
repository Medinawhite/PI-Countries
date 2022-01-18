const {DataTypes} =require ("sequelize");

//Aqui cremos los modelos para la posterior creacion de las tablas. En esre caso es el modelo de Actividades.
module.exports = (sequelize) =>{
    return sequelize.define("activities",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        seasson:{
            type: DataTypes.ENUM("Summer", "Spring", "Fall" , "Winter")
        }
    }, {timestamps: false});
}