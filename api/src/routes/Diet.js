const {Router} = require('express');
const { getDiets, createDiet, updateDiet, deleteDiet, getDietById } = require('../controllers/Diets');

const router = Router()

router.get('/', getDiets)

router.get('/:id', getDietById)

router.post('/create', createDiet)

router.put('/update/:id', updateDiet)

router.delete('/delete/:id', deleteDiet)

module.exports = router