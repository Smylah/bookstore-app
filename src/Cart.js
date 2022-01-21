import React from "react"

const Cart = () => {
  return (
    <div className="container p-5 ">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">Books Selected</h5>
          <p className="card-text">
            I will display the contents of your cart when im ready
          </p>
          <a href="#" className="btn btn-primary">
            Buy Books
          </a>
        </div>
      </div>

      <div className="card" aria-hidden="true">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            href="#"
            tabindex="-1"
            className="btn btn-primary disabled placeholder col-6"
          ></a>
        </div>
      </div>
    </div>
  )
}

export default Cart
