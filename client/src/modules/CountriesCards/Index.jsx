import{useState, useEffect} from "react"
import axios from "axios"
import { COUNTRIES_URL} from "../../constants.js"


export default function CountriesCards(){
    var [countries, setCountries] = useState([]);
    
    function getCountries(){
        return axios.get(COUNTRIES_URL)
        .then((countries) => setCountries(countries.data))
        
    };

    useEffect(()=> {
        getCountries();
    },[]);

    return(
        <div>
            {countries.map((c)=>{
                return(
                    <div>
                        <h3>{c.cca3}</h3>
                        <p>{c.name}</p> 
                        <p>{c.continents}</p>
                        <img src={c.flags} alt={c.flags}/>
                        
                    </div>
                    )
                })}
        </div>
    );
}