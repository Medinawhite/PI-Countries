import React , {useEffect}from 'react';
import {Link} from "react-router-dom";
import "./CSSModules/NavBar.css"
import SearchBar from "./Searchbar.js"
import {useSelector, useDispatch} from "react-redux";
import {getActivities} from "../store/actions/ActivitiesActions.js"
import image from "../image/CartelAlien.png"


const NavBar = ({handlerFilterByRegion, handleSort, handlerFilterByActivity})=>{
    const activities = useSelector((state)=>state.activities)
    const dispatch = useDispatch()
    

    useEffect(()=> {
        dispatch(getActivities())
    },[dispatch])
    return(
        <div className="navContainer">
            <div>
            <img className="image1" src={image} alt="CartelAlien" />
            </div>
            <div className="searchbar">
            <SearchBar/>
            </div>
            <Link to="/create">
                <button className="Creator" >Activity Creator</button>
            </Link>    
            
            <div className="filters"> 
            <select  className="Creator1 "onChange={(e)=> handlerFilterByRegion(e)}>
            <option value="All">All Region</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
            </select>
            <select className="Creator1" onChange={(e) =>handleSort(e)}>
            <option value="All">Order By</option>
            <option value="abc-asc">ABC ↑</option>
            <option value="abc-des">ABC ↓</option>
            <option value="pop-asc">Population ↑</option>
            <option value="pop-des">Population ↓</option>
            </select>
            <select className="Creator1" onChange={(e)=> handlerFilterByActivity(e)}>
            <option value="All">All Activities</option>
            {activities?.map((e)=>{
                return(
                <option value={e.name} key={e.id}>{e.name}</option>
                    )
                })
            }
            </select>
            </div>
        </div>
    )
}
export default NavBar;