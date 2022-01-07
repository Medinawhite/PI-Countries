//Aqui vamos a setear nuestro estado inicial

import {GET_COUNTRIES, GET_BY_NAME, GET_DETAIL} from "../actions/countriesActions.js"

const initialState={
    countries: [],
    countriesCopy: [],
    detail: [], 
}
//Aqui las acctions van a saber que hacer.
const reducer =  (state= initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                countriesCopy: action.payload,
            }
        case GET_BY_NAME:
            return{
                ...state,
                countries: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        default:
            return{
                ...state,
            }
    }
}
export default reducer;