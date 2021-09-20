import React from 'react';
import './Country.css';

const Country=(props)=>{
    const {name,capital,flag,population} = props.country;
    return(
      <div className="country">
        <h2>Name: {name}</h2>
        <p>Capital: {capital} Population: {population}</p>
        <img width="200px" src={flag} alt="" />
      </div>
    );
}

export default Country;