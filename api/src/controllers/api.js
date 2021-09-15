
const axios = require('axios')
const { Recipe } = require('../db')
const {APIKEY} = (process.env || 3001);

const apiRecipes = async () => {
    try {
        let {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=100&addRecipeInformation=true`)
        let number = 0

        let veganRecepies = [];

        data = data.results.map( (e) => {
          e.vegetarian ? 
          veganRecepies = e.diets.concat(["vegetarian"]) :
          veganRecepies = e.diets;
          number++
          return {
            numero: number,
            id: e.id,
            nombre: e.title,
            resumen: e.summary.replace(/<[^>]*>?/g, ''),
            puntuacion: e.spoonacularScore,
            salud: e.healthScore,
            pasos: e.analyzedInstructions[0] && e.analyzedInstructions[0].steps && e.analyzedInstructions[0].steps.map((step) => step.step),
            dietas: veganRecepies,
            tipo: e.dishTypes,
            imagen: e.image,
          }
        })

        let query = await Recipe.findAll()
        const allRecepies = data.concat(query)
        return allRecepies
    } catch (error) {
      console.error(error)  
    }
  }

  module.exports = apiRecipes

  