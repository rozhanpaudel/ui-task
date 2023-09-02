import { useState } from "react"

function Card({ beer }) {
  console.log(beer)
  const { name, tagline, description, image_url, ingredients } = beer
  const [isPopoverOpen,setIsPopoverOpen] = useState(false)
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '800px', maxHeight: '400px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image_url} style={{ objectFit: "contain", width: "150px", height: "150px" }} className="img-fluid rounded-start img-thumbnail" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <small className="text-warning">{tagline}</small>
              </p>
              <p className="card-text">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Card