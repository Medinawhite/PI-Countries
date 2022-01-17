//Este controller es el que nos hace de intermediario entre las rutas y la api.

const {Activities, Countries} = require("../db.js")

//Aqui creamos las funciones que van hacer las peticiones de nuestras rutas.
//Esta trae todas las actividades.
async function getAllActivities   (req, res, next) {
    try {
        const countries = await Activities.findAll()
        res.send(countries);
    } catch (error) {
        next(error);
    }
};


//Esta agrega acctividades. Si esta creada la actividad le añade el o los paises. Y si la actividad no esta creada la grega con los paises.
async function addActivity(req, res, next)  {
    const { name, dificulty, duration, season, img, cca3 } = req.body;
try {
    const matchActivity = await Activities.findOne({
    where: {
        name: name,
    },
    });
    const countrymatch = await Countries.findAll({
        where: {
        cca3: cca3,
        },
    });
    if (!matchActivity) {
        const createActivity = await Activities.create({
        name: name,
        dificulty: dificulty,
        duration: duration,
        season: season,
        img: img,
    });
        const addCountry = await createActivity.addCountries(countrymatch);

        return res.send(addCountry);
    }
    const matchedActivity = await matchActivity.addCountries(countrymatch);
    res.send(matchedActivity);
} catch (err) {
    next(err);
}
};



module.exports ={
    addActivity,
    getAllActivities,
}