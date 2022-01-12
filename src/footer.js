import React from "react"

const FooterPage = () => {
  return (
    <footer className="p-4 bg-dark text-white">
      <div className="d-flex flex-row mt-2 justify-content-center">
        <div className="p-2">Contact Me:</div>
        <div className="p-2">
          <a href="#!">
            <span>
              <i class="fab fa-twitter"></i>
            </span>
          </a>
        </div>
        <div className="p-2">
          <a href="#!">
            <span>
              <i class="fas fa-phone"></i>
            </span>
          </a>
        </div>
        <div className="p-2">
          <a href="#!">
            <span>
              <i class="fas fa-at"></i>
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
