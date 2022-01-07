import React,{ useEffect } from 'react';
import {connect} from 'react-redux'
import {getCountries} from '../store/actions/countriesActions.js'
import Cards from "./CountriesCards/Cards.js"
const Home = ({countries, getCountries}) =>{
    
    useEffect(()=> {
        getCountries();
    });

    return(
    <Cards countries={countries}/>
    )
}

const mapStateToProps =(state) => {
    return{
        countries: state.countries
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getCountries: countries =>{
            dispatch(getCountries(countries))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)