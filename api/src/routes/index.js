const { Router } = require('express');
const recipes = require('./Recipe')
const diets = require('./Diet')



const router = Router();
router.use('/recipes', recipes)
router.use('/diets', diets)

module.exports = router;
