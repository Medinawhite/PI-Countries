const {Router} =require("express")
const {addActivity,getAllActivities } = require("../controllers/activities.js");
const router = Router();

//Aqui lo que estamos haciendo setear la ruta y pasarle la funcion del controlador(controllers).

router.get("/",getAllActivities);
router.post("/",addActivity)

module.exports = router;