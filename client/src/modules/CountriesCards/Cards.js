import React from 'react';
import Card from"./Card.js";
import "../CSSModules/Cards.css"

const Cards = ({countries}) => {
    return(
        
        <div className="cardContainer">
            {
                countries?.map((e)=>{
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
            }
        </div>
    )
}
export default Cards;