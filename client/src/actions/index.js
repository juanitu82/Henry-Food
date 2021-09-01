const axios = require('axios');

 function getRecepies(pagina = 0, ot = 'nombre', order = 'ASC') {
    return async (dispatch) => {
        const {data} = await axios(`http://localhost:3001/api/recipes?&orderType=${ot}&order=${order}&page=${pagina}`)
        return dispatch({
            type: 'GET_RECEPIES',
            payload: data
        })
    }
}

function getAllRecepies(){
    return async (dispatch) => {
        const {data} = await axios('http://localhost:3001/api/recipes/all')
        const numberPages = Math.ceil(data.length/9);
        const arrayPages = []
        for (let i = 1; i <= numberPages; i++) arrayPages.push(i);
        
        return dispatch({
            type: 'GET_ALL_RECEPIES',
            payload: data,
            pages: arrayPages
        })
    }
}

export { getRecepies, getAllRecepies };