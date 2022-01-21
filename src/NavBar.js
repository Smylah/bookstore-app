import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button> */}

          <div /*className="collapse navbar-collapse" id="navbarSupportedContent"*/
          >
            <a className="navbar-brand mt-2 mt-lg-0" href="#!">
              <img src="" height="10" alt="Logo" loading="lazy" />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to="/bookstore-app/" className="nav-link">
                  <i className="fas fa-home fa-2xl"> Booklist </i>
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="/bookstore-app/addbook" className="nav-link">
                  <i className="far fa-plus-square fa-2xl"> Add Books </i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#!">
              <Link to="/bookstore-app/cart">
                <i className="fas fa-shopping-cart fa-2x" />
              </Link>
            </a>

            {/* <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#!"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar
