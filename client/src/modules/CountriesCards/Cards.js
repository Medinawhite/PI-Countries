import React from 'react';
import Card from"./Card.js";

const Cards = ({countries}) => {
    return(
        <div className="Cards">
            {countries.length?(
                countries.map((e)=>{
                    return(
                        <Card
                            key={e.cca3}
                            id={e.cca3}
                            name={e.name}
                            flags={e.flags}
                            continents={e.continents}
                        />
                    );
                })
            ):(
                <p>No se pueden mostrar los paises</p>
            )}
        </div>
    )
}
export default Cards;