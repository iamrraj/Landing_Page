import React, { Component } from "react";
import head from "../Image/Logo.png";
import "../Layout/index.css";
import Contact from "./Contact";

class Header extends Component {
  render() {
    return (
      <div className="roww">
        <Contact />
        <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed">
          <a
            className="navbar-brand"
            href={`${process.env.PUBLIC_URL}/fr/`}
            style={{ color: "#212226" }}
          >
            <img
              src={head}
              alt="MainImag"
              style={{ height: "45px", marginLeft: "10px" }}
            ></img>{" "}
            &nbsp;
          </a>

          <ul className="navbar-nav mx-auto"></ul>
          <ul className="navbar-nav navv ">
            <li className="nav-item nav-item1 btnn ">
              <a
                className="nav-link btn contact_btn font-weight-bold"
                href="#contactt"
                rel="modal:open"
                style={{ color: "rgb(183, 28, 28, 0.8)", marginRight: "0px" }}
              >
                Nous contacter
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
