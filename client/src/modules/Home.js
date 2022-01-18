import React,{useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {getCountries, filterByRegion, orderBy, filterByActivity} from '../store/actions/countriesActions.js';
import Cards from "./CountriesCards/Cards.js"
import NavBar from "./NavBar.js"
import Paged from "./Paged.js"
import "./CSSModules/Home.css"


const Home = () =>{
    const dispatch = useDispatch()
    const countries = useSelector((state)=>state.countries)
    const [, setOrder]=useState("")

    const [currentPage, setCurrentPage]= useState(1);
    let countriesPerPage = currentPage === 1? 9: 10; 
    
    const indexLastCountry =currentPage * countriesPerPage;
    const indexFirtsCountry = indexLastCountry -countriesPerPage;
    const currentCountry = countries.slice(
        indexFirtsCountry, 
        indexLastCountry
    )
    useEffect(()=> {
        dispatch(getCountries());
    }, [dispatch]);

    const paged = (paged)=>{
        setCurrentPage(paged);
    }
    
    const handleFilterByRegion = (e) => {
        e.preventDefault();
        dispatch(filterByRegion(e.target.value));
        setCurrentPage(1);
    };
    
    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };
    const handlerFilterByActivity = (e)=>{
        e.preventDefault()
        dispatch(filterByActivity(e.target.value));
        setCurrentPage(1);
    }
    
    return(
    <div className="homeContainer">
    <NavBar
    handlerFilterByRegion={handleFilterByRegion}
    handleSort={handleSort}
    handlerFilterByActivity={handlerFilterByActivity}
    />
    <Paged
    countriesPerPage={countriesPerPage}
    countries={countries}
    currentPage={currentPage}
    paged={paged}
    />
    <Cards countries={currentCountry}/>
    </div>
    )
}




export default Home;