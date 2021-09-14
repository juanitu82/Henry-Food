
const axios = require('axios')
const { Recipe, Diet } = require('../db')
const {APIKEY} = (process.env || 3001);

const apiRecipes = async (id) => {
    try {
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=100&addRecipeInformation=true`)
        let number = 0
        let recepies = data.results.map(e => {
          number++
          return {
          numero: number,
          id: e.id,
          nombre: e.title,
          resumen: e.summary.replace(/<[^>]*>?/g, ''),
          puntuacion: e.spoonacularScore,
          salud: e.healthScore,
          pasos: e.analyzedInstructions[0] && e.analyzedInstructions[0].steps && e.analyzedInstructions[0].steps.map((step) => step.step),
          dietas: e.diets,
          tipo: e.dishTypes,
          imagen: e.image,
          
        }})
        let query = await Recipe.findAll()
        const allRecepies = recepies.concat(query)
        // console.log(query)
        return allRecepies
    } catch (error) {
      console.error(error)  
    }
  }

  module.exports = apiRecipes

  