const store = require("redux");
store.createStore(reducerFn);
const reducerFn = (state,action) =>{
    return {
        state:state,
        type:action.type,
    }
}