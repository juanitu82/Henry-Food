const { Router } = require('express');
const recipes = require('./Recipe')
const diet = require('./Recipe')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/recipes', recipes)
router.use('/Diet', diet)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
