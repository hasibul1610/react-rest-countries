import React, { useEffect, useState } from 'react';

const Countries=() =>{
  const [countries, setCountries] = useState([]);
  useEffect( ()=>{
    fetch(' https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])



  return(
    <div>
      <h2>Travelling Around the World!!!!</h2>
      <h2>Total Countries: {countries.length}</h2>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }

    </div>
  );
}

const Country=(props)=>{
    return(
      <div>
        <h2>Name: {props.name}</h2>
        <p>Capital: {props.capital}</p>
      </div>
    );
}

export default Countries;