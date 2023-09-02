import { useEffect, useState } from "react";
import axios from 'axios'
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import BeerList from "./components/BeerList";
const url = "https://api.punkapi.com/v2/beers"
function App() {
  const [beerList, setBeerList] = useState([])
  useEffect(() => {
    fetchBeers()
  }, [])

  async function fetchBeers(){
    const response = await axios.get(url)
    const data = response.data
    console.log(data.length)
    setBeerList(data)
  }

  return (
    <div className="container">
      <Navbar />

      <BeerList beers={beerList} />
    </div>
  );
}

export default App;
