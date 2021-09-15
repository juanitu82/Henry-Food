const {Recipe, Diet} = require('../db')

 const getDiets = async (req, res, next) => {
    try {
        const dietQuery = await Diet.findAll({
            include: {
                model: Recipe,
                attributes: ['nombre'],
                through: {
                    attributes: []
                }
            },
            order: [['id', 'ASC']]
        })
        dietQuery.length ? res.json(dietQuery) : res.status(404).json('No hay tipos de dietas en la Base de Datos')
    } catch (error) {
        next(error)
    }
}

const getDietById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dietQuery = await Diet.findByPk(id)
        dietQuery.length ? res.json(dietQuery) : res.status(404).json('No se encontro la dieta en la Base de Datos')
    } catch (error) {
        next(error)
    }
}

const createDiet = async(req, res, next) => {
    try {
        const {nombre, createdInDB} = req.body;
        const [diet, created] = await Diet.findOrCreate({
            where: {
                nombre, createdInDB
            }
        })
        created ? res.json('La dieta se ha creado exitosamente') : res.status(404).json('La dieta ya existe')
    } catch (error) {
        next(error)
    }
}

const updateDiet = async(req, res, next) => {
    try {
        const diet = req.body;
        const {id} = req.params;
        const dietUpdate = await Diet.update(diet, {
            where: {
                id: id
            }
        })
        dietUpdate > 0 ? res.json('La dieta ha sido actualizada correctamente') : res.status(404).json('Ha ocurrido un error, no hubo actualizacion')

    } catch (error) {
        next(error)
    }
}

const deleteDiet = async(req, res, next) => {
    const {id} = req.params;
    const dietQuery = await Diet.destroy({
        where: {
            id: id
        }
    })
    dietQuery > 0 ? res.json('La dieta ha sido eliminada correctamente') : res.status(404).json('Ha ocurrido un error, la dieta no se borro')
}

module.exports = {
    getDiets,
    createDiet,
    updateDiet,
    deleteDiet,
    getDietById
}