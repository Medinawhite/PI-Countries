import React from 'react';
import {Link} from "react-router-dom";
import "./CSSModules/LandingPage.css";

const LandingPage =()=>{
    return(
    <div className="LandingPage">
        <Link to="/home">
            <img className="imagelink" src="http://3.bp.blogspot.com/-CI7cFkg6phk/U60BXZ-DaDI/AAAAAAAAE3I/RjTMkunWDWg/s1600/planeta-gif-2b924d2.gif" alt="button" />
        </Link>
        
    </div>
    );
};

export default LandingPage;