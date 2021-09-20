import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag, capital, population, region} = props.country;
    return (
        <div className="country">
            <h2>Country: {name}</h2>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <h4>Capital: {capital}, Population: {population}</h4>
        </div>
    );
};

export default Country;