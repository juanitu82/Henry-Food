
const initialState = {
    recepies: [], // [{..},{..}..]
    allRecepies: [],
    pages: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECEPIES':
            return {
                ...state,
                recepies: action.payload
            };
        case 'GET_ALL_RECEPIES':
            return {
                ...state,
                allRecepies: action.payload,
                pages: action.pages
            };
        default:
            return state
    }
}

export default Reducer