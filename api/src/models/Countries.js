const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("countries", {
    cca3: {
      type : DataTypes.STRING(3),
      allowNull : false,
      primaryKey : true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Not declared",
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.STRING,
    },
    population:{
      type: DataTypes.STRING,
    }
  },{timestamps: false});
};
