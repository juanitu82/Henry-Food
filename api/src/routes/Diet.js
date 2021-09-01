const {Router} = require('express');
const { getDiets, createDiet, updateDiet, deleteDiet } = require('../controllers/Diets');
const router = Router()

router.get('/', getDiets)

router.post('/', createDiet)

router.put('/', updateDiet)

router.delete('/', deleteDiet)