const {Router} =require("express")
const {Activities} = require("../db.js")
const router = Router();
const {addActivity,getAllActivities} = require("../controllers/activities.js")

router.get("/",getAllActivities);
router.post("/",addActivity)


module.exports = router;