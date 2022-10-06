
const axios = require('axios')
const { Recipe, Diet } = require('../db')
const {APIKEY} = process.env;

const apiRecipes = async () => {
  let number = 0
  let veganRecepies = [], apiCall;
    try {
        apiCall = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=100&addRecipeInformation=true`)
    } catch (error) {
      console.error(error)  
    }
    apiCall = apiCall.data.results.map( recipe => {

          recipe.vegetarian ? 
          veganRecepies = recipe.diets.concat(["vegetarian"]) 
          :
          veganRecepies = recipe.diets;
          number++

          return {
            numero: number,
            id: recipe.id,
            nombre: recipe.title,
            resumen: recipe.summary.replace(/<[^>]*>?/g, ''),
            puntuacion: recipe.spoonacularScore || 'Sin puntuacion',
            salud: recipe.healthScore,
            pasos: recipe.analyzedInstructions[0] && recipe.analyzedInstructions[0].steps && recipe.analyzedInstructions[0].steps.map((step) => step.step),
            diets: veganRecepies,
            tipo: recipe.dishTypes,
            imagen: recipe.image,
          }
        })

        let recipeQueryToDB = await Recipe.findAll({
          include: {
            model: Diet,
            attributes: ["nombre"],  
            through: {
              attributes: [],
            },
          },
        })
        const allRecepies = apiCall.concat(recipeQueryToDB)
        return allRecepies
  }

  module.exports = apiRecipes

 