import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './header';
export default function Details({ match,history}) {
  const [darkMode, setDarkMode] = useState(getDefaultTheme());
  const id = match.params.id;
  console.log(id);
  const [country, setCountry] = useState([{}]);
  useEffect(() => {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    const fectDataDetails = async () => {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${id}`
        );
        setCountry(data);
        console.log(data);
      };
      fectDataDetails();
      setDarkMode(selectedTheme)
    
  }, [darkMode]);
  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }
  if (country[0].name) {
    return (<>
      <div className="container">
          <button className={"btn btn-light mt-3" } onClick={()=>history.push("/") }><i className="fa fa-arrow-left"></i> back</button>
    
        <div className="row justify-content-between mt-4">
          <div className="col-md-6">
            <img className="img-fluid" src={country[0].flag} alt="" />
          </div>
          <div className="col-md-6 country-detail">
            <h3>{country[0].name}</h3>
            <div className="row justify-content-between">
              <div className="col-md-6 mb-5 my-text-16px">
                <div>
                  <b>Native Name : </b>
                  {country[0].nativeName}
                </div>
                <div>
                  <b>Population</b> : {country[0].population}
                </div>
                <div>
                  <b>Region : </b>
                  {country[0].region}
                </div>
                <div>
                  <b>Sub Regions : </b>
                  {country[0].subregion}
                </div>
                <div>
                  <b>Capital : </b>
                  {country[0].capital}
                </div>
              </div>
              <div className="col-md-6 my-text-16px">
                <div>
                  <b>Top Level Domain : </b>
                  {country[0].topLevelDomain[0]}
                </div>
                <div>
                  <b>Currencies : </b>
                  {country[0].currencies.map((currency) => (
                    <span key={currency.name} className="mr-4">
                      {currency.name}
                    </span>
                  ))}
                </div>
                <div>
                  <b>Languages : </b>
                  {country[0].languages.map((language) => (
                    <span key={language.name} className="mr-4">
                      {language.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-5 row my-text-16px">
              <b>Border Countries : </b>
              {country[0].borders.map((x) =>
                x ? (
                  <span className="col"
                    key={Math.random()}
                    className="border-country btn-back mb-3"
              // style={{backgroundColor:`${darkMode?'hsl(209, 23%, 22%)':'#ffffff'}`,color:`${darkMode?'hsl(0, 0%, 100%)':'#111517'}`}}
                     
                  >
                    {x}
                  </span>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
