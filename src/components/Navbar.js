import { Link } from "react-router-dom";
import Modal from "./Modal";

function Navbar({ shouldShowAddButton, addNewCustomBeer }) {
  return (
    <div className="App">
      <ul class="nav">
        <li class="nav-item">
          <Link to="/">
            <a class="nav-link text-dark">All Beers</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/mybeers">
            <a class="nav-link text-black-50" href="#">
              My Beers
            </a>
          </Link>
        </li>
      </ul>
      <Modal addNewCustomBeer={addNewCustomBeer} />
      {shouldShowAddButton ? (
        <button
          className="btn btn-primary btn-sm" data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ position: "absolute", top: "2%", left: "65%" }}
        >
          Add a new Beer
        </button>
      ) : null}
    </div>
  );
}

export default Navbar;
