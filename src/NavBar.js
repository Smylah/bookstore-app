import React from "react"

const NavBar = () => {
  return (
    <div className="nav d-flex p-4 bg-dark text-white">
      <div>
        <ul className="nav nav-pills ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Add Book
            </a>
          </li>
          <ul class="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="btn btn-primary btn-nav" href="#!">
                Cart
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
