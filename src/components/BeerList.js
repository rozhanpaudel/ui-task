import Card from "./Card";

function BeerList({ beers }) {

  return (
    <>
      {beers.map((item) => <Card beer={item} />)}
    </>
  );
}

export default BeerList;
