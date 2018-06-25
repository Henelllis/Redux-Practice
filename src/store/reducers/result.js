import * as actionTypes from '../actions/actionsTypes';

const intialState = {
    results: []
}

const reducer = (state = intialState, action) =>{

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date , value:action.payload.result})
            }
        case actionTypes.DELETE_RESULT:

            const updatedArray = state.results.filter(result => result.id !== action.payload.id);

            return{
                ...state,
                results:updatedArray
            }
         default:
            return state
    }
    return state;
};

export default reducer;