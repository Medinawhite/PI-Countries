//Aqui vamos a setear nuestro estado inicial

import {GET_COUNTRIES, GET_BY_NAME, GET_DETAIL, FILTER_BY_REGION,ORDER_BY,FILTER_BY_ACTIVITY} from "../actions/countriesActions.js"
import {POST_ACTIVITY, GET_ACTIVITIES} from "../actions/ActivitiesActions.js"
const initialState={
    countries: [],
    countriesCopy: [],
    detail: [], 
    activities: [],
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
        case FILTER_BY_REGION:{
            let countriesCopy = state.countriesCopy;
            let filteredRegion =
                action.payload === "All"
                    ? countriesCopy
                    : countriesCopy.filter((f) => f.continents === action.payload);
            return {
                ...state,
                countries: filteredRegion,
            };
        }
        case FILTER_BY_ACTIVITY:{
            let countrieactivity = state.countriesCopy;
            let filteractivity= action.payload === "All" ? 
            countrieactivity 
            : countrieactivity.filter((f) => {
                return f.activities.some((a)=> a.name === action.payload)
            });
                
            
                return {
                    ...state,
                    countries: filteractivity
                }
            
        }
        case ORDER_BY:{
            let sortCountries;
            let countries= state.countriesCopy;
            if(action.payload === "All"){
                return {countries}
            }
            if (action.payload === "abc-asc"){
                sortCountries = state.countries.sort((a,b)=>{
                    if (a.name > b.name){
                        return -1;
                    }
                    if (a.name<b.name){
                        return 1;
                    }
                    return 0;
                });

            }
            if(action.payload === "abc-des"){
                sortCountries = state.countries.sort((a,b)=>{
                    if (a.name > b.name){
                        return 1;
                    }
                    if (a.name<b.name){
                        return -1;
                    }
                    return 0;
                })
            }
            if(action.payload === "pop-asc"){
                sortCountries = state.countries.sort((a, b)=> {
                    return a.population - b.population;
                })
            }
            if(action.payload === "pop-des"){
                sortCountries = state.countries.sort((a, b)=> {
                    return b.population - a.population;
                })
            }
            
            return{
                ...state,
                countries: sortCountries,
            }
        }
        case POST_ACTIVITY:{
            return{
                ...state
            }
        }
        case GET_ACTIVITIES:{
            return{
                ...state,
                activities: action.payload
            }
        }
        default:
            return{
                ...state,
            }
            
    }
}
export default reducer;