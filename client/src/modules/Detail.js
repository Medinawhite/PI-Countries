import React,{ useEffect} from 'react';
import {useSelector, useDispatch} from"react-redux"
import { getDetail } from '../store/actions/countriesActions';
import {useParams, Link} from "react-router-dom"
import "./CSSModules/Detail.css"

const Detail =()=>{
    let {id} = useParams();
    const details = useSelector((state)=>state.detail)
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getDetail(id))
        
    },[dispatch, id])
return(
    <div className="AllContainer">
        <div className="btncontainer">
        <Link to="/home" >
        <button className="btn"> Go at Home</button>
        </Link>
        
        </div>
        <div className="DetailContainer">
            <div className="DetailContainer1">
                    <img className="img1" src={details.flags} alt={details.name}/>
                    <h1>{details.name}</h1>
                    <div className="details">
                        <div>
                        <h2>Acronym:</h2>
                        <h4>{details.cca3}</h4>
                        <h2>Continent :</h2>
                        <h4>{details.continents}</h4>
                        </div>
                        <div>
                        <h2>Capital :</h2>
                        <h4>{details.capital}</h4>
                        <h2>Sub Region :</h2>
                        <h4>{details.subregion}</h4>
                        </div>
                        <div>
                        <h2>Area :</h2>
                        <h4>{details.area} Km²</h4>
                        <h2>Population :</h2>
                        <h4>{details.population}</h4>
                        </div>
                    </div>
            <div className="ActivityContainer">
            <h1>Activities :</h1>
            {details.activities?.map((e)=>{
                return(
                    <div key={e.id} className="activity">
                        <h3>{e.name}</h3>
                        <p>Duration: {e.duration} hours</p>
                        <p>Difficulty: {e.dificulty}</p>
                        <p>Seasson: {e.seasson}</p>
                    </div>
                )
            })}
            <Link to="/create">
                <button className="btn">Create Activity</button>
            </Link>
            </div> 
            </div>
        </div>
    </div>
    ); 
};


export default Detail;