const { DataTypes } = require('sequelize');

//Aqui cremos los modelos para la posterior creacion de las tablas. En esre caso es el modelo de Countries.
module.exports = (sequelize) => {
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
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "Not declared",
        set(value){
          this.setDataValue('capital', value.join("{}"))
      }
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: "Not declared",
    },
    area:{
      type: DataTypes.STRING,
    },
    population:{
      type: DataTypes.STRING,
    }
  },{timestamps: false});
};
