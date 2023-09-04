
import { useState } from "react"
import { toast } from "react-toastify"
import CustomBeer from "../assets/custom-beer.jpg"

function Modal({ addNewCustomBeer }) {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [description, setDescription] = useState('')

  function validateBeer() {
    let isvalid = true
    if (!name || !genre || !description) {
      isvalid = false
      toast.warn('Name, Genre and Description are required field')
    }
    return isvalid
  }

  async function handleCustomBeer() {
    const status = validateBeer()
    if(!status){
      return
    }
    const customBeer = {
      name, tagline: genre, description, image: CustomBeer
    }
    addNewCustomBeer(customBeer)
    setName('')
    setGenre('')
    setDescription('')
    toast.info('Successfully added custom beer')
  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a new Beer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src={CustomBeer} style={{ height: "100px", width: "50px" }} />
              <form onSubmit={() => handleCustomBeer(e)} className="mt-3">
                <input type="text" class="form-control mt-2" onChange={(e) => setName(e.target.value)} placeholder="Beer name*" value={name} required />
                <input type="text" onChange={(e) => setGenre(e.target.value)} value={genre} class="form-control mt-2" placeholder="Genre*" required />
                <input type="text" onChange={(e) => setDescription(e.target.value)} class="form-control mt-2" value={description} placeholder="Description*" required />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={(e) => handleCustomBeer(e)}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal