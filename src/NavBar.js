import React from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import AddBook from "./addBook"
import FooterPage from "./footer"
import Cart from "./Cart"
import BooksTable from "../src/Components/BooksTable"

const NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="nav p-4 bg-dark text-white">
          <ul className="nav nav-pills ">
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
            <li className="nav-item">
              <Link
                to="/bookstore-app/cart"
                className="nav-link btn btn-active"
              >
                <i className="fas fa-cart-plus fa-2x"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/bookstore-app/" element={<BooksTable />} />
          <Route path="/bookstore-app/addbook" element={<AddBook />} />
          <Route path="/bookstore-app/cart" element={<Cart />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </>
  )
}

export default NavBar
