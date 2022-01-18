//Aqui vamos  a hacer el indice de paginas.
import React from "react";
import "./CSSModules/Paged.css";

const Paged = ({ countriesPerPage, countries, paged }) => {
    const pageNumbers = [];
    const pageQuantity = Math.ceil(countries.length / countriesPerPage); // calculo la cantidad de páginas que voy a tener en función de la cantidad de paises
    for (let i = 1; i < pageQuantity + 1; i++) {
        pageNumbers.push(i);
}
return (
    <nav>
    <div className="pagedContainer">
        {pageNumbers?.map((number) => {
        return (
            <div key={number}>
            <button className="btn" onClick={() => paged(number)}>
                {number}
            </button>
            </div>
        );
        })}
    </div>
    </nav>
);
};

export default Paged;
