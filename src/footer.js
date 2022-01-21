import React from "react"

const FooterPage = () => {
  return (
    <footer className="bg-dark text-white fixed-bottom-flexible ">
      <div className="d-flex flex-row mt-2 mb-auto justify-content-center">
        <div className="p-2">Contact Me:</div>
        <div className="p-2">
          <a href="#!">
            <span>
              <i className="fab fa-twitter fa-1x"></i>
            </span>
          </a>
        </div>
        <div className="p-2">
          <a href="#!">
            <span>
              <i className="fas fa-phone fa-1x"></i>
            </span>
          </a>
        </div>
        <div className="p-2">
          <a href="#!">
            <span>
              <i className="fas fa-at fa-1x"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-copyright text-center">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="#!" style={{ color: "white", textDecoration: "none" }}>
          {" "}
          Ikay Designs{" "}
        </a>
      </div>
    </footer>
  )
}

export default FooterPage
