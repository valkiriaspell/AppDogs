const { Router } = require('express');
const {getTemps} = require("../api-calls/temps.js");

const router = Router();


router.get("/", getTemps);


module.exports = router;