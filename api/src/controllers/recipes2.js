const {Recipe, Diet} = require('../db')
const {Op} = require('sequelize');
const apiRecipes = require('./api');

const getRecepies = async (req, res, next) => {
    try {
        let recepies = await apiRecipes()
        let { name } = req.query
        if(name){
            name = name.trim().toLowerCase()
            const recepiesByName = await recepies.filter( e => e.nombre.toLowerCase().includes(name))
            recepiesByName ? res.json(recepiesByName) : res.status(404).json('No se encontraron resultados')
        }else res.json(recepies)
    } catch (error) {
        next(error)
    } 
};

const getRecepiesById = async (req, res, next) => {
    try {

        let recepies = await apiRecipes()
        let {id} = req.params;
        if(id.length < 10) {
            id = +id;
            const queryById = recepies.filter( e => e.id == id);
            return queryById.length ? res.json(queryById) : res.status(404).send('Receta no encontrada')
        }
        if(id.length > 10){
            const queryById = recepies.filter( e => e.id == id);
            return queryById.length ? res.json(queryById) : res.status(404).send('Receta no encontrada')
        }
    } catch (error) {
        next(error)
    }
}

const CreateRecepie = async (req, res, next) => {
    try {
        
        const { nombre, resumen, puntuacion, salud, pasos, dietas, tipo = [], imagen = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6P0Q4Fxp3SeBa2V6TrDY8gHaEz%26pid%3DApi&f=1', createdInDB} = req.body;
        const [recipe, created] = await Recipe.findOrCreate({
            where: {
                 nombre, resumen, puntuacion, salud, pasos, dietas, tipo, imagen, createdInDB
            }
        })
       
        if(created) res.json(recipe)
        else res.json('La receta ya existia en la base de datos')
    } catch (error) {
        next(error)
    }
}

const updateRecepie = async (req, res, next) => {
    try {
        const recipe = req.body;
        const {id} = req.params;
        await Recipe.update(recipe, {
            where: {
                id,
            }
        })
        res.json('La receta fue actualizada');
    } catch (error) {
        next(error)
    }
};

const deleteRecepie = async (req, res, next) => {
    try {
        const {id} = req.params;
        await Recipe.destroy({
            where: {
                id,
            }
        })
        res.json('La receta fue eliminada');
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getRecepies,
    getRecepiesById,
    CreateRecepie,
    updateRecepie,
    deleteRecepie
}

