import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import BeerList from "../components/BeerList";
const url = "https://api.punkapi.com/v2/beers";
import "./MyBeer.css";

function MyBeer() {
  const [customBeers, setCustomBeers] = useState([])

  const pushTOCustomBeer = (customBeer) => {
    setCustomBeers([...customBeers, customBeer])
  }


  const renderQuery = customBeers.length ? (<BeerList beers={customBeers} />) : (<div className="CutomBeerMenu mt-5">
    <div className="text-center inside-text">
      <p>Nothing to see yet. </p>
      <span>
        <a data-bs-toggle="modal"
          data-bs-target="#exampleModal" className="text-blue">Click Here</a> to add your first beer!
      </span>
    </div>
  </div>)

  return (
    <div className="container">
      <Navbar shouldShowAddButton={true} addNewCustomBeer={pushTOCustomBeer} />
      {renderQuery}
    </div>
  );
}

export default MyBeer;
