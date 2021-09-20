import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

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

      <div className="country-container">
        {
          countries.map(country => <Country country={country}></Country>)
        } 
      </div>
    </div>
  );
}



export default Countries;