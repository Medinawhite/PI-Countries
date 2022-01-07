import React from 'react';
import {Link} from "react-router-dom";

const PrincipalPage =()=>{
    return(
    <Link to="/home">
        <button>Ir a Home</button>
    </Link>
    );
};

export default PrincipalPage;