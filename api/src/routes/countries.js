const {Router} =require("express");
const router = Router();
const {getById,getByName,getAllCountries, addActivityCountries}= require ("../controllers/countries.js")


router.get("/",getByName);
router.get("/all",getAllCountries)
router.get("/:id",getById)
router.post("/:countryId/activity/:activityId", addActivityCountries)




module.exports = router;