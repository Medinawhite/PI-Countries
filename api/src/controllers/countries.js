const {Countries, Activities } = require("../db.js");
const {Op} = require("sequelize")
async function getAllCountries(req, res, next)  {
    try {
        const countries = await Countries.findAll()
        res.json( countries.length > 0  ? countries: "No hay paises aun");
    } catch (error) {
        next(error);
    }
};

async function getByName(req, res, next)  {
const { name } = req.query;
try {
    if (!name) {
    
    res.send("No estas buscando por nombre");
    } else {
    let countrieQuery = await Countries.findAll({
        where: {
        name: {[Op.iLike]: `%${name}%`}
        
        },
        include: Activities
    });
    if (!countrieQuery) {
        return res.status(404).json({
        error: ` no se encuentra ningun Pais con el nombre , ${name}`,
        });
    }
    res.json(countrieQuery);
    }
} catch (err) {
    next(err);
}
};

async function getById (req, res, next) {
    const id = req.params.id.toUpperCase()
    try {
        
        let countriesid = await Countries.findByPk(id,{
            include: Activities
        })
        res.json( countriesid ? countriesid: "No hay paises con ese ID");
    } catch (error) {
        next(error);
    }
};
async function addActivityCountries (req, res, next) {
    const {countryId,activityId } = req.params
    const countrie = await Countries.findByPk(countryId)
    try {
        countrie.addActivity(activityId)
        res.send("Se agrego correctamente" )
    } catch (error) {
        next(error);
    }
}
module.exports = {
    getById,
    getByName,
    getAllCountries,
    addActivityCountries
}