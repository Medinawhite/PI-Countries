//Este controller es el que nos hace de intermediario entre las rutas y la api.

const {Activities} = require("../db.js")
const axios = require("axios")

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


//Esta agrega acctividades.
async function addActivity(req, res, next)  {
    try {
        const activitie = req.body
        const countries = await Activities.create({ 
            ...activitie
        })
        res.json(countries);
    } catch (error) {
        next(error);
    }
};


module.exports ={
    addActivity,
    getAllActivities
}