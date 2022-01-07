//Aqui creamos el modelo de la card que le pasa los valores por props desde Cards
import React from "react"
import {Link} from "react-router-dom";

const Card =({id, name, flags, continents}) =>{
    return(
        <Link to={`/countries/${id}`}>
            <div className="Card">
                <h3 className="text">{id}</h3>
                <h4 className="text">{name}</h4>
                <h4 className="text">{continents}</h4>
                <img className="image" src={flags} alt={name}/>
            </div>
        </Link>
    )
}
export default Card;