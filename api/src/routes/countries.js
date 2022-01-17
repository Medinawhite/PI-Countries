const {Router} =require("express");
const router = Router();
const {getById,getByName,getAllCountries}= require ("../controllers/countries.js")

//Aqui lo que estamos haciendo setear la ruta y pasarle la funcion del controlador(controllers)

router.get("/",getByName);
router.get("/all",getAllCountries)
router.get("/:id",getById)





module.exports = router;