const axios = require('axios');

 const getRecepies = (name = '', diet = '', orderType = 'id', order = 'ASC') => {
     
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
        // console.log(data)
        return await dispatch({
            type: 'GET_RECEPIE_BY_ID',
            payload: data[0]
        })
    }
}

const getOrderScore = (orderType, order) => {
    console.log('Get Order Score despachada!')
     console.log(orderType, order)
    return (dispatch) => {
        
        return dispatch({
            type: 'ORDERED_RECEPIES_BY_SCORE',
            payload: orderType,
            order
        })
    }
}

const getOrderAbc = (orderType, order) => {
    console.log('Get Order ABC despachada!')
     console.log(orderType)
    return (dispatch) => {
        
        return dispatch({
            type: 'ORDERED_RECEPIES_BY_ABC',
            payload: orderType,
            order
        })
    }
}

const filterByDiet = (diet ) => {
    console.log('filter by diet despachada!')
    console.log(diet)
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
    console.log(recepie)
    console.log(typeof recepie)
    // console.log(recepie.toJSON())
    return async (dispatch) => {
        const creacion = await axios.post('http://localhost:3001/api/recipes/create', recepie)
        console.log('llega aca!')
        console.log(creacion)
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

// {
//     createdInDB: true, 
//     dietas: ['gluten free'],
//     nombre: 'hola',
//     pasos: ['segundo paso'],
//     puntuacion: 1,
//     resumen: 'chau',
//     salud: 1
// }