const {Router} = require('express');
const { getRecepies, getRecepiesById, CreateRecepie, updateRecepie, deleteRecepie } = require('../controllers/recipes2');

const router = Router()



router.get('/', getRecepies)

router.get('/:id', getRecepiesById)

router.post('/create', CreateRecepie)

router.put('/update/:id', updateRecepie)

router.delete('/delete/:id', deleteRecepie)


module.exports = router