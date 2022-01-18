//Aqui creamos el modelo de la card que le pasa los valores por props desde Cards
import React from "react"
import {Link} from "react-router-dom";
import "../CSSModules/Card.css"
const Card =({id, name, flags, continents}) =>{
    return(
        <Link to={`/countries/${id}`} style={{ textDecoration: 'none' }}>
            <div className="container">
                <div className="containerimg">
                <img className="img" src={flags} alt={name}/>
                </div>
                <div className="containertext">
                <h3 className="texttitle">{name}</h3>
                <h3 className="textid">{id}</h3>
                <h4 className="text">{continents}</h4>
                </div>
            </div>
        </Link>
    )
}
export default Card;