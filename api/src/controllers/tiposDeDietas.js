
const arrayDietas = [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto vegetarian",
  "ovo vegetarian",
  "lacto ovo vegetarian",
  "vegan",
  "pescatarian",
  "paleolithic",
  "primal",
  "whole30",
  "dairy free",
  "fodmap friendly"
]

const tiposDietas = arrayDietas.map( diet => ({nombre: diet}))

module.exports = tiposDietas