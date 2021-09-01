
const axios = require('axios')
const { Recipe, Diet } = require('../db')
const {APIKEY} = (process.env || 3001);

const api = async () => {
    try {
      const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=100&addRecipeInformation=true&instructionsRequired=true`)
      const recepies = data.results.map(e => ({
        id: e.id,
        nombre: e.title,
        resumen: e.summary,
        puntuacion: e.spoonacularScore,
        salud: e.healthScore,
        steps: e.analyzedInstructions[0] && e.analyzedInstructions[0].steps && e.analyzedInstructions[0].steps.map((step) => step.step),
        dieta: e.diets,
        tipo: e.dishTypes,
        imagen: e.image,
        
      }))
    
      
      return await recepies
      // await Recipe.bulkCreate(recepies)
       
    } catch (error) {
      console.error(error)  
    }
  }
  
  const diets = async () => {
    try {
      const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=100&addRecipeInformation=true&instructionsRequired=true`)
      let dietas = [...new Set(data.results.map(e => e.diets).flat())]
      dietas = dietas.map(e => ({nombre: e}))
    // console.log(dietas)
     await Diet.bulkCreate(dietas)
    } catch (error) {
      console.log(error)
    }
    
  }

  module.exports = {
      api,
      diets
  }