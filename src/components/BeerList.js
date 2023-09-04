import Card from "./Card";
import "./BeerList.css";

function BeerList({ beers }) {
  return (
    <div className="card-container mt-5">
      {beers.map((item) => (
        <Card beer={item} />
      ))}
    </div>
  );
}

export default BeerList;
