//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {port} = require("./src/utils/Config/index.js");
const axios = require("axios")
const {Countries} =require("./src/db.js")

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  const countriesApi = await axios.get("https://restcountries.com/v3.1/all");
  const modelCountry = countriesApi.data.map((e) => ({
    cca3: e.cca3,
    name: e.name.common,
    flags: e.flags.svg,
    continents: e.continents,
    capital: e.capital,
    subregion: e.subregion,
    area: e.area,
    population: e.population,
  }));
  await Countries.bulkCreate(modelCountry);
  server.listen(port, () => {
    console.log(`as listening at ${port}`); // eslint-disable-line no-console
  });
});
