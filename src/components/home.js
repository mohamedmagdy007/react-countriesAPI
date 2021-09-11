import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
export default function Home() {
  const [countries, setCountries] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const fectData = async () => {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    setCountries(data);
  };
  const fectDataDetails = async (name) => {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    setCountries(data);
  };
  const FilterUsingRegion = async (region) => {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    setCountries(data);
  };

  useEffect(() => {
    fectData();
  }, []);
  const handelFilterUsingRegion = (e) => {
    const RegionName = e.target.value;
    if (RegionName === "all" || !RegionName) {
      fectData();
    } else {
      FilterUsingRegion(RegionName);
    }
  };

  const handelTextChange = (e) => {
    const continentName = e.target.value;
    setInputVal(continentName);
    if (continentName.length === 0 || !continentName) {
      fectData();
    } else {
      fectDataDetails(continentName);
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="d-flex flex-wrap justify-content-between">
          <form className="mb-1">
            <input
              className="form-control"
              value={inputVal}
              id="country"
              type="text"
              placeholder="Search for Country ..."
              onChange={handelTextChange}
            />
          </form>
          <select
            class="form-select form-select-lg mb-3 w-25"
            onChange={handelFilterUsingRegion}
            aria-label=".form-select-lg example"
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between mt-5">
          {countries.map((country) => {
            return (
              <div
                key={country.name}
                className="col-md-4 country-data col-lg-3 mb-4 "
                title="Click to Show Details"
              >
                <Link to={`/details/${country.name}`}>
                  {" "}
                  <img
                    className="card-img-top img-fluid"
                    src={country.flag}
                    alt={country.name ? country.name : ""}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {country.name ? country.name : "Un Titled"}
                  </h5>
                  <ul className="list-unstyled">
                    <li className=" p-0 mb-1 my-text-14px">
                      <b>Population : </b>{" "}
                      {country.population ? country.population : "Un known"}
                    </li>
                    <li className="p-0 mb-1 my-text-14px">
                      <b>Region : </b>{" "}
                      {country.region ? country.region : "un known"}
                    </li>
                    <li className="p-0 mb-1 my-text-14px">
                      <b>Capital : </b>{" "}
                      {country.capital ? country.capital : "un known"}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
