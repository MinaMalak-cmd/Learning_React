import {createStore} from "redux"

const reducerFn = (state={counter:1},action) =>{
    switch(action.type){
        case "increment":
           return {
              counter : state.counter+1
           };
           case "decrement":
           return {
              counter : state.counter-1
           };
           default :
           return state;
       }  
}
const store = createStore(reducerFn);
export default store;