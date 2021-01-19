import React from "react";
import head from "../Image/Logo.png";
import "./index.css";
import Contact from "../Contact/Conatct";
import text from "../Contact/Message/Translation";

function Header() {
  const baseUrl = process.env.PUBLIC_URL;

  const link = () =>
    window.location.pathname === baseUrl + "/pl/"
      ? baseUrl + "/pl/"
      : window.location.pathname === baseUrl + "/pt/"
      ? baseUrl + "/pt/"
      : window.location.pathname === baseUrl + "/fr/"
      ? baseUrl + "/fr/"
      : baseUrl + "/";

  return (
    <div className="roww">
      <Contact />
      <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed">
        <a className="navbar-brand" href={link} style={{ color: "#212226" }}>
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
              {text(
                "Skontaktuj się",
                "Fala connosco",
                " Nous contacter",
                "Get in touch"
              )}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
