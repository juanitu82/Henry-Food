const {Router} = require('express');
const {Recipe} = require('../db')
const {Op} = require('sequelize');
const { getRecepies, getRecepiesById, CreateRecepie, updateRecepie, deleteRecepie, countRecepies, getAllRecepies } = require('../controllers/Recipes');

const router = Router()

router.get('/count', countRecepies)

router.get('/all', getAllRecepies)

router.get('/', getRecepies)

router.get('/:id', getRecepiesById)

router.post('/create', CreateRecepie)

router.put('/update', updateRecepie)

router.delete('/delete', deleteRecepie)


module.exports = router