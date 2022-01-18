//Esta search bar lo que va a hacer es buscar por Pais.
//por ahora solo busca por pais
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../store/actions/countriesActions";
import "./CSSModules/Searchbar.css"


const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmitName(e) {
        if(name<=0){
            e.preventDefault();
            alert("No ha insertado ningun Pais")
        }else{
            e.preventDefault();
            dispatch(getByName(name));
            setName("");
            e.target.reset();   
        }
    }


    return (
        <form  onSubmit={(e) => handleSubmitName(e)}>
            <input className="Creator1"
            onChange={(e) => handleInputChangeName(e)}
            type="text"
            placeholder="Country..."
            pattern="[a-z]{1,15}"
            title= "Only numbers and leters"
            ></input>
            <button className="Creator">Search</button>
        </form>
    );
};

export default SearchBar;