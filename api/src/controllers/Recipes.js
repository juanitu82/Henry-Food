const {Recipe, Diet} = require('../db')
const {Op} = require('sequelize');
const axios = require('axios');
const apiRecipes = require('./api');
const orderArray = require('./Order')
const {APIKEY} = process.env;

const getRecepies = async (req, res, next) => {
    try {
        let recepies = await apiRecipes()
        let { name, diet, order, orderType} = req.query
        console.log(recepies.length)
        console.log(`aca entra en el back!  ahora empieza el filtrado`)
        console.log(diet)
        console.log(req.query)
        //******************************* */
        if(name && diet){
            // console.log('entras aca')
            name = name.trim().toLowerCase()
            const query = recepies.filter(e => {
                if((e.nombre.toLowerCase().includes(name)) && (e.dieta.includes(diet))) return e
            })
            orderArray(query, orderType, order)
            query.length ? res.json(query ) : res.status(404).json('No encontre ninguna receta')
        }
        else if(name){
            console.log('entra aca ahora????')
            name = name.trim().toLowerCase()
            const recepiesByName = await recepies.filter( e => e.nombre.toLowerCase().includes(name))
            orderArray(recepiesByName, orderType, order)
            recepiesByName ? res.json(recepiesByName) : res.status(404).json('No se encontraron resultados')
        }else if(diet){
            // console.log('Esta entrando aca en el back')
            console.log('entra en el if que quiero, el diet que recibe es:',diet)
            let dietQuery = recepies.filter(e => e.dietas.includes( diet) )
            console.log('luego de filtrado, ANTES del ordenado',dietQuery.length)
            // console.log(orderArray(dietQuery, orderType, order))
            // dietQuery = orderArray(dietQuery, orderType, order)
            // console.log(dietQuery.map(e => ({numero: e.numero, nombre: e.nombre})))
            console.log(dietQuery.length)
            dietQuery.length ? res.json( dietQuery ) : res.status(404).json('No encontre ninguna receta')
        }else{
            orderArray(recepies, orderType, order)
            // recepies.map(e => ({numero: e.numero, id: e.id, [orderType]: e[orderType]}))
            res.json(recepies)
        }
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
        const dietQuery = await Diet.findAll({
            where: {
                nombre: {
                    [Op.in]: dietas
                }
            }
        });
        if(created){
            await recipe.addDiets(dietQuery);
            res.json(recipe)
        }else{
            res.json('La receta ya existia en la base de datos')
        }
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

