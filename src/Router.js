import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddBook from "./addBook"
import FooterPage from "./footer"
import Cart from "./Cart"
import BooksTable from "./Components/BooksTable"
import NavBar from "./navbar"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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

export default Router
