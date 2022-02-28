const { Router } = require('express');
const Dogs = require('./dogs');
const Temps = require('./temps');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", Dogs);
router.use("/temps", Temps);

router.get("/", (req, res) => {
  res.send("Back End DOGS");
});


module.exports = router;
