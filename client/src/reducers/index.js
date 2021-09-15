

const initialState = {
    diets: [],
    recepies: [],
    allRecepies: [],
    details: [],
    form: []
}

const Reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_RECEPIES':
            return {
                ...state,
                recepies: action.payload,
                allRecepies: action.payload
            };
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            };
        case 'GET_RECEPIE_BY_ID':
            return {
                ...state,
                details: action.payload
            };
        case 'ORDERED_RECEPIES_BY_SCORE':
            let recepies = state.recepies;
            const sort = (action.payload === 'puntuacion' && action.order === 'ASC') ? 
            recepies.sort((a, b) => a.puntuacion - b.puntuacion) :
            recepies.sort((a, b) => b.puntuacion - a.puntuacion);
            return {
                ...state,
                recepies: sort
            };
        case 'ORDERED_RECEPIES_BY_ABC':
            let recepiesAbc = state.recepies;
            const sortAbc = (action.payload === 'ABC' && action.order === 'ASC') ? 
            recepiesAbc.sort((a, b) => a.nombre.localeCompare(b.nombre)) :
            recepiesAbc.sort((a, b) => b.nombre.localeCompare(a.nombre));
            return {
                ...state,
                recepies: sortAbc
            };
        case 'FILTER_RECEPIES_BY_DIET':
            let recepiesDiet = state.allRecepies;
            let sortDiet = recepiesDiet.filter( el => (el.dietas.includes(action.payload)) === true ) 
            return {
                ...state,
                recepies: sortDiet
            };
        case 'FILTER_RECEPIES_BY_NAME':
            return {
                ...state,
                recepies: action.payload
            };
        case 'CREATE_RECEPIE':
            return {
                ...state,
            }
        default:
            return state
        }
    }

export default Reducer