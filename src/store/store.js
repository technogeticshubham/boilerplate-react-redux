import { createStore } from "redux"

const initData={
    products:[
        
    ],
    
}
const reducer=(state=initData,action)=>{
   
   

    return state;
}
const store = createStore(reducer);

export default store;