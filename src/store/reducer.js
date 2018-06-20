const intialState = {
    counter: 0,
    results: []
}

const reducer = (state = intialState, action) =>{

    switch(action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return{
                ...state,
                counter: state.counter + action.payload.value
            }
        case 'SUBTRACT':
            return{
                ...state,
                counter: state.counter - action.payload.value
            }
        case 'STORE_RESULT':
            return{
                ...state,
                results: state.results.concat({id: new Date , value:state.counter})
            }
        case 'DELETE_RESULT':

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