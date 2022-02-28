const { Router } = require('express');
const {} = require("../controllers/temps");

const router = Router();


router.get("/", getTemps);