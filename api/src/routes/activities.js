const {Router} =require("express")
const router = Router();
const {addActivity,getAllActivities} = require("../controllers/activities.js")

//Aqui lo que estamos haciendo setear la ruta y pasarle la funcion del controlador(controllers).

router.get("/",getAllActivities);
router.post("/",addActivity)


module.exports = router;