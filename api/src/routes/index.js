const { Router } = require('express');
const {getDogs, createDog, getDogById} = require ('../api-calls/dogs.js')
const {getTemps} = require("../api-calls/temps.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)

router.post('/dog', createDog)

router.get('/dogs/:id', getDogById)

router.get('/temperament', getTemps)


router.get("/", (req, res) => {
  res.send("Back End DOGS");
});


module.exports = router;
