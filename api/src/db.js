require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  dbUser, dbPassword, dbHost, dbPort, dbName,
} = require ("./utils/Config/index.js");

//Inicializamos sequelize. 
const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`, {
  logging: false, //Esto es para que no me muestre en la consola los cambios
  native: false, 
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Activities, Countries } = sequelize.models;

// Aqui seteamos las relaciones.
Activities.belongsToMany(Countries, {through: "countries_activities"})
Countries.belongsToMany(Activities, {through: "countries_activities"} )

module.exports = {
  ...sequelize.models, // Exportamos los modelos de las tablas. 
  conn: sequelize,     //Exportamos la conexion
};
