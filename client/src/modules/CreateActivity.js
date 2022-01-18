//Aqui creamos la actividad con un post a activities. 
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../store/actions/countriesActions.js";
import { postActivity } from "../store/actions/ActivitiesActions.js";
import Select from "react-select"
import "./CSSModules/CreateActivity.css"


const CreateActivity = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let countries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        name: "",
        dificulty: "",
        duration: "",
        seasson: "",
        cca3: [], 
    });
    //Estas son las opciones a seleccionar.
    const optionsC =
        countries?.map((country) => {
            return {
                value:country.cca3, key:country.cca3, label:country.name
                
            };
        });
    const  optionsDi=[
        {name: "dificulty",value:"1" ,label:"1"},
        {name: "dificulty",value:"2" ,label:"2"},
        {name: "dificulty",value:"3" ,label:"3"},
        {name: "dificulty",value:"4" ,label:"4"},
        {name: "dificulty",value:"5" ,label:"5"},
    ]
    const optionsDu= [
        {name: "duration",value:"30" ,label:"30 min"},
        {name: "duration",value:"1" ,label:"1 hour"},
        {name: "duration",value:"2" ,label:"2 hour"},
        {name: "duration",value:"3" ,label:"3 hours"},
        {name: "duration",value:"4" ,label:"4 hours"},
        {name: "duration",value:"5" ,label:"More than 5 hours"},
    ]
    const optionsSe=[
        {name: "seasson",value:"Spring" ,label:"Spring"},
        {name: "seasson",value:"Summer" ,label:"Summer"},
        {name: "seasson",value:"Fall" ,label:"Fall"},
        {name: "seasson",value:"Winter" ,label:"Winter"},
    ]

    useEffect(() => {
    dispatch(getCountries());
    }, [dispatch]);

    const handleInputChangeActivity = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
            });
    };

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.name]: e.value,
        });
    }

    function handleSelect(e) {
        setInput({
            ...input,
            cca3: [...input.cca3, e.value,],
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if(!input.name|| !input.dificulty|| !input.duration|| !input.seasson|| input.cca3.length<=0){
            alert("Missing fields to fill!!")  
        }else{
        dispatch(postActivity(input));
        alert("Activity created!");
        setInput({
        cca3: [],
        name: "",
        dificulty: "",
        duration: "",
        seasson: "",
        });
        history.push("/home");
        }
    }

    return (
        <div className="ContainerActivity">
        <Link to={"/home"}>
            <button className="btn1" >Go Back</button>
        </Link>
            <div className="ContainerActivity1">
                <div className="ContainerActivity2">
                    <h3>Add activity:</h3>
                    <form  onSubmit={handleInputChange}>
                    <input
                        onChange={(e)=>handleInputChangeActivity(e)}
                        name="name"
                        value={input.name}
                        type="text"
                        placeholder="Activity..."
                        className="Creator3"
                        pattern="[a-z]{1,15}"
                        title= "Only numbers and leters"
                    />
                    </form>
                    <form onSubmit={handleSubmit}>
                    <h3>Select Dificulty:</h3>
                    <div >
                        <Select 
                        className="Selector"
                        name="dificulty" 
                        onChange={handleInputChange} 
                        options={optionsDi} 
                        placeholder="Selecct Dificulty"/>
                    </div>
                    <h3>Select Duration:</h3>
                    <div className="Selector">
                        <Select 
                        name="duration" 
                        placeholder="Select Duration" 
                        onChange={handleInputChange} 
                        options={optionsDu}/>
                    </div>
                    <h3>Select Seasson:</h3>
                    <div className="Selector">
                        <Select 
                        name="seasson" 
                        onChange={handleInputChange} 
                        placeholder="Selecct Seasson"  
                        options={optionsSe}/>
                    </div>
                    <h3>Select a Country or Countries: </h3>
                    <div className="Selector">
                        <Select 
                        placeholder="Selecct one o more Cointries " 
                        options={optionsC} 
                        onChange={handleSelect}/>
                    </div>
                    <div >
                        <h2>Countries added:</h2>
                        <div>
                        {input.cca3?.map((e)=>{return <h4 key={e}>{e}</h4>})}
                        </div>
                    </div>
                        <button className="btn">Submit activity</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateActivity;