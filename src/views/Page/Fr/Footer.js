import React, { Component } from "react";
// import Contact from "../Contact";
import facebook from "../Image/Facebook.png";
import twitter from "../Image/Twiter.png";
import linkedin from "../Image/Ln.png";
import google from "../Image/Medium.png";

class Footer extends Component {
  render() {
    const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const isEnabled = this.props.state.match(mailformat);
    return (
      <div className="" style={{ marginTop: "40px" }}>
        <div className="">
          <div className="col-sm-12 backbone" style={{ width: "100%" }}>
            <div className="col-sm-7 col-md-12 col-xl-10 backdody ">
              <p
                className=" footer-don"
                style={{
                  color: "rgb(183, 28, 28)",
                  marginTop: "80px"
                }}
              >
                Prêt à commencer ?
              </p>
              <h1
                className="landing_heading"
                style={{ marginTop: "-12px", fontSize: "40px" }}
              >
                Boostez votre parc automobile maintenant !
              </h1>
              <p
                className="footer-don1 "
                style={{ marginTop: "20px", fontSize: "15px" }}
              >
                Nous veillons à ce que vous réduisiez vos coûts de carburant et
                d'entretien, à ce que vous optimisiez le coût total de
                possession de votre flotte et à ce que vos conducteurs
                s'engagent.
              </p>

              <div style={{ marginTop: "50px" }}>
                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={this.props.submit}
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        style={{ border: "1px solid gray", height: "38px" }}
                        type="text"
                        name="email"
                        value={this.props.state}
                        autoComplete="off"
                        onChange={this.props.change}
                        placeholder="Votre adresse e-mail"
                      />{" "}
                    </div>
                    <div className="col-sm-4">
                      <input
                        type="submit"
                        disabled={!isEnabled}
                        value="COMMENCER À ÉCONOMISER"
                        className="btn landing_button pl_button fr_button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="bottom_navbar" style={{ width: "100%" }}>
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ marginLeft: "0px", marginTop: "150px" }}
            >
              <ul
                className="navbar-nav navv mr-auto "
                style={{ opacity: "0.5" }}
              >
                <li className="nav-item nav-item1  ">
                  <p className="nav-link text-dark">
                    Copyright 2020 VivaDrive Polska
                  </p>
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
                    <img src={google} alt="Linkedin" className="social_image" />
                  </a>
                </li>
              </ul>
            </nav>

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
