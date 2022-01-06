//Aqui vamos a setear nuestro estado inicial

import {GET_COUNTRIES} from "../actions/countriesActions.js"

const initialState={
    countries: []
}
const reducer =  (state= initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            }
        default:
            return{
                ...state,
            }
    }
}
export default reducer;