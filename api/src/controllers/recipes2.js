const {Recipe, Diet} = require('../db')
const {Op} = require('sequelize');
const apiRecipes = require('./api');

const getRecepies = async (req, res, next) => {

    let recepies 
    let { name } = req.query

    try {
        recepies = await apiRecipes()
        
    } catch (error) {
        next(error)
    }

    if(name){
        
        name = name.trim().toLowerCase()
        const recepiesByName = await recepies.filter( recipe => 
            recipe.nombre.toLowerCase().includes(name))
        recepiesByName ? 
        res.json(recepiesByName) 
        : 
        res.status(404).json('No se encontraron resultados')
    }
    
    else {
        recepies ?
        res.json(recepies) 
        : 
        res.status(404).json('No se encontraron resultados')
    }
};

const getRecepiesById = async (req, res, next) => {
    let recepies
    let id = req.params.id
    
    try {
         recepies = await apiRecipes()
       
    } catch (error) {
        next(error)
    }

    if(id.length < 10) {
        id = parseInt(id);
        const queryById = recepies.filter( recipe => recipe.id === id);
        return queryById.length ? 
        res.json(queryById) 
        : 
        res.status(404).send('Receta no encontrada')
    }
    else if(id.length > 10){
        const queryById = recepies.filter( recipe => recipe.id == id);
        return queryById.length ?
         res.json(queryById) 
         :
          res.status(404).send('Receta no encontrada')
    }
        const recipeQueryById = recepies.filter( recipe => recipe.id == id);
        return recipeQueryById ?
         res.json(recipeQueryById)
         :
         res.status(404).send('Receta no encontrada')
}
    


const CreateRecepie = async (req, res, next) => {

    const { nombre, resumen, puntuacion, salud, pasos, dietas, tipo = [], imagen = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6P0Q4Fxp3SeBa2V6TrDY8gHaEz%26pid%3DApi&f=1', createdInDB} = req.body;

    try {
        
        const [recipe, created] = await Recipe.findOrCreate({
            where: {
                 nombre, resumen, puntuacion, salud, pasos, tipo, imagen, createdInDB
            }
        })

        if(created){
            
            dietas.forEach( async dieta => {
                let dietQuery
                try {
                    dietQuery = await Diet.findAll({
                        where: {
                            nombre: dieta
                        }
                    })
                    if (dietQuery) await recipe.addDiets(dietQuery);
                    
                } catch (error) {
                    console.error(error)
                }
                
            })
            
            console.log(recipe)
            res.json('La receta se ha creado correctamente')
        }else{
            res.json('La receta ya existia en la base de datos')
        }
    } catch (error) {
        next(error)
    }
}

const updateRecepie = async (req, res, next) => {

    try {
        
        await Recipe.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
    } catch (error) {
        next(error)
    }
    res.json('La receta fue actualizada');
};

const deleteRecepie = async (req, res, next) => {
    try {
        
        await Recipe.destroy({
            where: {
                id: req.params.id,
            }
        })
    } catch (error) {
        next(error)
    }
    res.json('La receta fue eliminada');
}


module.exports = {
    getRecepies,
    getRecepiesById,
    CreateRecepie,
    updateRecepie,
    deleteRecepie
}

