import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import BeerList from "../components/BeerList";
import Loader from "../components/Spinner";
const url = "https://api.punkapi.com/v2/beers";

function AllBeer() {
  const [beerList, setBeerList] = useState([]);
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetchBeers().catch((err) => {
      console.log("Network Error", err)
    });
  }, [page]);

  async function fetchBeers() {
    setIsLoading(true)
    const response = await axios.get(`${url}?page=${page}&per_page=10`);
    const data = response.data;
    setBeerList([...beerList, ...data]);
    setIsLoading(false)
  }

  return (
    <div className="container">
      <Navbar />

      <BeerList beers={beerList} />
      {isLoading ? <Loader /> : null}
      <button className="d-flex justify-content-center btn btn-sm btn-primary " onClick={() => { setPage(page + 1) }}>Load More</button>
    </div>
  );
}

export default AllBeer;
