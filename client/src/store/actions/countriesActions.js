//Aqui vamos a crear las acciones para nuestro estado global.
import axios from 'axios';
import {ALL_COUNTRIES_URL, COUNTRIES_NAME, COUNTRIES_ID} from "../../constants.js"


export function getCountries(){
    return async (dispatch)=>{
        try {
            const res= await  axios.get(ALL_COUNTRIES_URL)
                
            dispatch({type: GET_COUNTRIES,payload: res.data})
        } catch (error) {
            console.log("Fallo getCountries action")
        }
        
    }
}
export function getByName(name){
    return async (dispatch)=>{
        try {
            const res= await axios.get(COUNTRIES_NAME+ name)
            dispatch({type: GET_BY_NAME, payload: res.data})
        } catch (error) {
            console.log("Fallo getByName action")
        }
    }
}
export function getDetail(id){
    return async(dispatch)=>{
        try {
            const res = await  axios.get(COUNTRIES_ID+id)
            dispatch({type: GET_DETAIL, payload: res.data})
        } catch (error) {
            console.log("Fallo getDetail action")
        }
    }
}


export const GET_BY_NAME = "GET_BY_NAME"
export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_DETAIL= "GET_DETAIL"
