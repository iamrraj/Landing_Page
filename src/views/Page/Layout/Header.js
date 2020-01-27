import React, { Component } from "react";
import head from "../Image/Logo.png";
import "./index.css";
import Contact from "../Contact";

class Header extends Component {
  render() {
    return (
      <div className="roww">
        <Contact />
        <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed">
          <a
            className="navbar-brand"
            href="/digitalfleet/"
            style={{ color: "#212226" }}
          >
            <img
              src={head}
              alt="MainImag"
              style={{ height: "45px", marginLeft: "10px" }}
            ></img>{" "}
            &nbsp;
          </a>

          {/* <button
            className="navbar-toggler font-weight-bold text-white"
            style={{ background: "#b71c1c", padding: "8px" }}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              style={{ top: "2px", position: "relative", fontSize: "18px" }}
            >
              MENU
            </span>{" "}
            <span className="navbar-toggler-icon "></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="navbar-nav mx-auto"></ul>
          <ul className="navbar-nav navv ">
            {/* <li className="nav-item nav-item1 btnn ">
                <a
                  className="nav-link  text-dark font-weight-bold "
                  href="/pricing"
                >
                  Plans & Pricing
                </a>
              </li> */}

            <li className="nav-item nav-item1 btnn ">
              <a
                className="nav-link btn contact_btn font-weight-bold"
                href="#contactt"
                rel="modal:open"
                style={{ color: "rgb(183, 28, 28, 0.8)", marginRight: "0px" }}
              >
                Get in touch
              </a>
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </div>
    );
  }
}

export default Header;
