import { useEffect, useState } from "react";
import "./Card.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Card({ beer }) {
  const { name, tagline, description, image_url, ingredients, image } = beer;
  return (
    <div className="mb-3 card-bg-light-blue">
      <div className="card-section" style={{ height: "250px" }}>
        <div className="card-image">
          <img src={image_url || image} data-tooltip-id="my-tooltip-1" />
        </div>
        <div className="card-description">
          <h4 className="card-title">{name}</h4>
          <div className="text-warning mt-2 mb-2">
            <small>{tagline}</small>
          </div>
          <div className="" style={{ maxHeight: "100px" ,overflow: "clip"}}>
            {`${description}`}
          </div>
        </div>
      </div>
      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content={typeof ingredients ==='object' ? `Ingredients: ${Object.keys(ingredients).join(",")}` : null}
      />
    </div>
  );
}
export default Card;
