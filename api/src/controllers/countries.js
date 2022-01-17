//Este controller es el que nos hace de intermediario entre las rutas y la api.

const {Countries, Activities } = require("../db.js");
const {Op} = require("sequelize")

//Aqui creamos las funciones que van hacer las peticiones de nuestras rutas.
//Este trae todos los paises.
async function getAllCountries(req, res, next)  {
    try {
        const countries = await Countries.findAll({
            include: Activities
        })
        res.json( countries.length > 0  ? countries: "No hay paises aun");
    } catch (error) {
        next(error);
    }
};

//Este trae los paises por query ejem:(?name="Spain")
//El op lo que hace es traerse operadores de  sequelize(En este caso lo que hace es que el name no tiene que ser exacto)
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
    if (countrieQuery.length<=0) {
        return res.status(404).json({
        error: ` No se encuentra ningun Pais con el nombre , ${name}`,
        });
    }
    res.json(countrieQuery);
    }
} catch (err) {
    next(err);
}
};
//Trae los paises segun su id por params.
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


module.exports = {
    getById,
    getByName,
    getAllCountries,
}