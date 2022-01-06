//Aqui vamos a crear las acciones para nuestro estado global.
import axios from 'axios';
import {COUNTRIES_URL} from "../../constants.js"
export const GET_COUNTRIES = 'GET_COUNTRIES';


export function getCharacters(){
    return function(dispatch){
        return axios.get(COUNTRIES_URL)
        .then((response)=>{
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
        })
    }
}