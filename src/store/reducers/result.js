import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';
const intialState = {
    results: []
}

const reducer = (state = intialState, action) =>{

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date , value:action.payload.result})});
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.payload.id);
            return updateObject(state, {results: updatedArray});
         default:
            return state
    }
    return state;
};

export default reducer;