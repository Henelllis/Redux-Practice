const intialState = {
    counter: 0
}

const reducer = (state = intialState, action) =>{

    switch(action.type){
        case 'INCREMENT':
            return{
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return{
                counter: state.counter - 1
            }
        case 'ADD':
            return{
                counter: state.counter + action.payload.value
            }
        case 'SUBTRACT':
            return{
                counter: state.counter - action.payload.value
            }
         default:
            return state
    }
    
};

export default reducer;