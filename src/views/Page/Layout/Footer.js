import React, { Component } from "react";
// import Contact from "../Contact";
import facebook from "../Image/Facebook.png";
import twitter from "../Image/Twiter.png";
import linkedin from "../Image/Ln.png";
import google from "../Image/Medium.png";
import Form from "../Form";

class Footer extends Component {
  render() {
    return (
      <div className="land" style={{ marginTop: "40px" }}>
        {/* <Contact /> */}
        <div className="footer_container">
          <div className="col-sm-12" style={{ paddingBottom: "30px" }}>
            <div className="col-sm-7 col-md-12 col-xl-10">
              {/* <p className="font-weight-bold">.</p> */}
              <p
                className=" footer-don"
                style={{
                  color: "rgb(183, 28, 28)",
                  marginTop: "80px"
                }}
              >
                Ready to get started?
              </p>
              <h1
                className="landing_heading"
                style={{ marginTop: "-12px", fontSize: "40px" }}
              >
                Supercharge your fleet now!
              </h1>
              <p
                className="  footer-don"
                style={{ marginTop: "20px", fontSize: "15px" }}
              >
                {/* {" "}
                Questions? Call us at{" "}
                <strong
                  style={{ color: "rgb(183, 28, 28)", opacity: "1" }}
                  className="font-weight-bolder"
                >
                  1-800-975-5304
                </strong>{" "}
                or email us{" "}
                <strong
                  style={{ color: "rgb(183, 28, 28)", opacity: "1" }}
                  className="font-weight-bolder"
                >
                  digitalfleet@vivadrive.io
                </strong> */}
                We make sure you reduce fuel and maintenance costs, optimise
                your fleet TCO and engage your drivers.
              </p>

              <div style={{ marginTop: "30px" }}>
                <Form />
              </div>
            </div>

            <div className="bottom_navbar">
              <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{ marginLeft: "0px", marginTop: "150px" }}
              >
                <ul
                  className="navbar-nav navv mr-auto "
                  style={{ opacity: "0.5" }}
                >
                  {/* <li className="nav-item nav-item1  ">
                    <a className="nav-link  text-dark  " href="# ">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item nav-item1  ">
                    <a className="nav-link  text-dark " href="/pricing">
                      Plans & Pricing
                    </a>
                  </li> */}
                  {/* <li className="nav-item nav-item1  ">
                    <a className="nav-link  text-dark " href="/landing">
                      About Us
                    </a>
                  </li> */}
                  {/* <li className="nav-item nav-item1  ">
                    <a
                      className="nav-link text-dark"
                      href="#contact"
                      rel="modal:open"
                    >
                      Contact us
                    </a>
                  </li> */}

                  <li className="nav-item nav-item1  ">
                    <a className="nav-link text-dark" href="# ">
                      Copyright 2020 VivaDrive Polska
                    </a>
                  </li>

                  <li className="nav-item nav-item1  ">
                    <a className="nav-link text-dark" href="# ">
                      Privacy Policy
                    </a>
                  </li>
                </ul>

                <ul className="navbar-nav navv nav1 ">
                  <li className="nav-item nav-link   ">
                    <a
                      href=" https://www.linkedin.com/company/vivadrive/"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ marginRight: "16px" }}
                    >
                      <img
                        src={linkedin}
                        alt="Linkedin"
                        className="social_image"
                      />
                    </a>
                    <a
                      href="https://twitter.com/vivadriveio"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ marginRight: "16px" }}
                    >
                      <img
                        src={twitter}
                        alt="Linkedin"
                        className="social_image"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/pg/vivadriveio"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ marginRight: "16px" }}
                    >
                      <img
                        src={facebook}
                        alt="Linkedin"
                        className="social_image1"
                      />
                    </a>
                    <a
                      href=" https://medium.com/vivadrive"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src={google}
                        alt="Linkedin"
                        className="social_image"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="bottom_footer">
              <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{ marginLeft: "0px", marginTop: "0px" }}
              >
                <ul
                  className="navbar-nav navv mr-auto "
                  style={{ opacity: "0.5" }}
                ></ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
