const axios = require('axios');

 const getRecepies = () => {
     
    return async (dispatch) => {
        
        const {data} = await axios(`http://localhost:3001/api/recipes`)
        return await dispatch({
            type: 'GET_RECEPIES',
            payload: data
        })
    }
}

const getDiets = () => {
    return async (dispatch) =>{
        const {data} = await axios.get('http://localhost:3001/api/diets')
        return dispatch({
            type: 'GET_DIETS',
            payload: data
        })
    }
}

const getRecepieById = (id) => {
    return async (dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/api/recipes/${id}`)
        return await dispatch({
            type: 'GET_RECEPIE_BY_ID',
            payload: data[0]
        })
    }
}

const getOrderScore = (orderType, order) => {
    
    return (dispatch) => {
        
        return dispatch({
            type: 'ORDERED_RECEPIES_BY_SCORE',
            payload: orderType,
            order
        })
    }
}

const getOrderAbc = (orderType, order) => {
   
    return (dispatch) => {
        
        return dispatch({
            type: 'ORDERED_RECEPIES_BY_ABC',
            payload: orderType,
            order
        })
    }
}

const filterByDiet = (diet ) => {
   
    return async (dispatch) => {
        
        return await dispatch({
            type: 'FILTER_RECEPIES_BY_DIET',
            payload: diet
        })
    }
}

const filterByName = (name) => {
    
    return async (dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/api/recipes?name=${name}`)
        
        return await dispatch({
            type: 'FILTER_RECEPIES_BY_NAME',
            payload: data
        })
    }
}


const createRecepie = (recepie) => {
    
    return async (dispatch) => {
        const creacion = await axios.post('http://localhost:3001/api/recipes/create', recepie)
        return await dispatch({
            type: 'CREATE_RECEPIE',
            creacion
        })
    }
}

export { 
    getRecepies, 
    getDiets,
    getRecepieById,
    getOrderScore,
    getOrderAbc,
    filterByDiet,
    filterByName,
    createRecepie 
}
