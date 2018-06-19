const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    counter:0,

}

//Reducer
const rootReducer =  (state = intialState, action) => { 
    if(action.type === 'INC_COUNTER'){
        //DO NOT SET STATE
        //NEVER MUTATE
        return {
            ...state,
            counter:state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        //DO NOT SET STATE
        //NEVER MUTATE
        return {
            ...state,
            counter:state.counter + action.value
        }
    }
    return state;
};
//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subcription
store.subscribe(() => {
    console.log('[SUBSCRIPTION]', store.getState())
});


//Distpatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 5});

console.log(store.getState());

