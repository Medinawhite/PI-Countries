const {Activities} = require("../db.js")
const axios = require("axios")


async function getAllActivities   (req, res, next) {
    try {
        const countries = await Activities.findAll()
        res.send(countries);
    } catch (error) {
        next(error);
    }
};
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