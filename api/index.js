  //                      __
  //                    .'  '.
  //                _.-'/  |  \
  //   ,        _.-"  ,|  /  0 `-.
  //   |\    .-"       `--""-.__.'=====================-,
  //   \ '-'`        .___.--._)=========================|
  //    \            .'      |                          |
  //     |     /,_.-'        |        ESTE ES           |
  //   _/   _.'(             |          MI              |
  //  /  ,-' \  \            |        BACKEND           |
  //  \  \    `-'            |                          |
  //   `-'                   '--------------------------'
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {port} = require("./src/utils/Config/index.js");
const axios = require("axios")
const {Countries} =require("./src/db.js")

//Aqui lo que hacemos es volcar la API en nuestra base de datos. Para poder usarla desde nuestra db.
conn.sync({ force: true }).then(async () => {
  const countriesApi = await axios.get("https://restcountries.com/v3.1/all");
  const modelCountry = countriesApi.data.map((e) => ({
    cca3: e.cca3,
    name: e.name.common,
    flags: e.flags.svg,
    continents: e.region,
    capital: e.capital,
    subregion: e.subregion,
    area: e.area,
    population: e.population,
  }));
  await Countries.bulkCreate(modelCountry);
  server.listen(port, () => {
    console.log(`as listening at ${port}`); //Aqui le decimos que escuche en el puerto.
  });
});
