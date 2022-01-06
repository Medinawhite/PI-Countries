const { Router } = require('express');
const Countries = require('./countries.js');
const Activities = require('./activities.js');

const router = Router();

//Aqui configuramos las rutas.

router.use("/countries", Countries )
router.use("/activities", Activities )

module.exports = router;
