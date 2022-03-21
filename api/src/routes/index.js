const { Router } = require('express');
const {getDogs, createDog, getDogById} = require ('../api-calls/dogs.js');
const {ratingDog, allRateDog } = require('../api-calls/rating.js');
const {getTemps} = require("../api-calls/temps.js"); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)

router.post('/dog', createDog)

router.post('/rating', ratingDog)

router.get('/ratings', allRateDog)

router.get('/dog/:id', getDogById)

router.get('/temperament', getTemps)


router.get("/", (req, res) => {
  res.send("Back End DOGS");
});


module.exports = router;
