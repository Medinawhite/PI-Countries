import axios from "axios";
import {ACTIVITIES_URL} from "../../constants.js"

export function postActivity(newActivity){
    try {
        const activity = axios.post(ACTIVITIES_URL, newActivity);
        return {
            type: "POST_ACTIVITY",
            payload: activity
        }
    } catch (error) {
        console.log(error)
    }
}
export function getActivities(){
    return async (dispatch)=>{
        try {
            const res = await  axios.get(ACTIVITIES_URL)
                
            dispatch({type: GET_ACTIVITIES, payload: res.data})
        } catch (error) {
            console.log("Fallo getActivities action")
        }
        
    }
}

export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
