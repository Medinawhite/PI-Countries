//Aqui vamos a interactuar con las variables de entorno que estan en la raiz de la api(el archivo ".env")
//Cuando lo importamos le podemos poner valores por defecto en caso de que no esten aclarados en el entorno.
require ("dotenv").config()

module.exports={
    dbUser: process.env.DB_USER || "postgres",
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST || "localhost",
    port: process.env.PORT || "3001",
    dbPort: process.env.DB_PORT || "5432",
    dbName: process.env.DB_NAME || "countries"
}