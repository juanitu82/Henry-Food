const {Recipe, Diet} = require('../db')
const {Op} = require('sequelize');

const getRecepies = async (req, res, next) => {
    try {
        const {name, orderType, order, page} = req.query
        if(name){
            const recetasDiet = await Recipe.findAll({
                order: [[orderType, order]],
                offset: (page * 9),
                limit: 9,
                where: {
                    nombre: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: {
                    model: Diet,
                    Attributes: ['nombre']
               }
            })
            res.json(recetasDiet.length ? recetasDiet : 'No encontre nada')
        }else{
            // console.log(page)
            const recDB = await Recipe.findAll({
               order: [ [ orderType, order ] ],
               limit: 9,
            //    offset: page * 9,
               include: {
                model: Diet,
                Attributes: ['nombre']
           }
            }) 
            // console.log(recDB)
            res.json(recDB)
        }

    } catch (error) {
        next(error)
    }
    
};

const getRecepiesById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const recipeId = await Recipe.findByPk(id);
        if(recipeId) res.json(recipeId)
        else res.json( 'La receta no existe')
    } catch (error) {
        next(error)
    }
}

const CreateRecepie = async (req, res, next) => {
    try {
        const {id, nombre, resumen, puntuacion, salud, steps, dieta, tipo, imagen, createdInDB} = req.body;
        console.log(dieta)
        const [recipe, created] = await Recipe.findOrCreate({
            where: {
                id, nombre, resumen, puntuacion, salud, steps, tipo, imagen, createdInDB
            }
        })

        // const dietQuery =  dieta.map(async (e) => {
        //     await Diet.findAll({
        //     where: {
        //         nombre: e
        //     }
        //     })
        // }).concat()
        // console.log(dietQuery)
        // recipe.addDiet(dietQuery)
        
        res.json(created === true ? res.json(recipe) : 'La receta ya existe')
        // res.json('hola')
    } catch (error) {
        next(error)
    }
}

const updateRecepie = async (req, res, next) => {
    try {
        const recipe = req.body;
        const {id} = req.body;
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
        const {id} = req.body;
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

const countRecepies = async (req, res, next) => {
    try {
        const {count} = await Recipe.findAndCountAll()
        // await console.log( Recipe.findAll())
        // console.log(count) 
        res.json(count);
    } catch (error) {
        next(error)
    }
}

const getAllRecepies = async (req, res, next) => {
    try {
        const allRecepies = await Recipe.findAll()
        res.json(allRecepies);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRecepies,
    getRecepiesById,
    CreateRecepie,
    updateRecepie,
    deleteRecepie,
    countRecepies,
    getAllRecepies
}