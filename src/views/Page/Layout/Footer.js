import React from "react";
import facebook from "../Image/Facebook.png";
import twitter from "../Image/Twiter.png";
import linkedin from "../Image/Ln.png";
import google from "../Image/Medium.png";
import Form from "../Form/Form";
import text from "../Contact/Message/Translation";

function Footer() {
  return (
    <div className="footer" style={{ marginTop: "40px" }}>
      <div className="">
        <div className="col-sm-12 backbone" style={{ width: "100%" }}>
          <div className="col-sm-7 col-md-12 col-xl-10 backdody ">
            <p
              className=" footer-don"
              style={{
                color: "rgb(183, 28, 28)",
                marginTop: "80px",
              }}
            >
              {text(
                "Gotowy?",
                "Pronto para começar?",
                "Prêt à commencer ?",
                "Ready to get started?"
              )}
            </p>
            <h1
              className="landing_heading"
              style={{ marginTop: "-12px", fontSize: "40px" }}
            >
              {text(
                "Zacznij oszczędzać",
                "Transforma já a tua frota",
                "Boostez votre parc automobile maintenant !",
                "Supercharge your fleet now!"
              )}
            </h1>
            <p
              className="footer-don1 "
              style={{ marginTop: "20px", fontSize: "15px" }}
            >
              {text(
                "Zapewniamy zmniejszenie kosztów paliwa i serwisu, optymalizację kosztu TCO i pełne zaangażowanie kierowców.",
                "Nous veillons à ce que vous réduisiez vos coûts de carburant et d'entretien, à ce que vous optimisiez le coût total de possession de votre flotte et à ce que vos conducteurs s'engagent.",
                "Temos a certeza que vais reduzir a despesa do combustível, manutenção, optimizar o teu TCO e motivar os teus motoristas.",
                "We make sure you reduce fuel and maintenance costs, optimise your fleet TCO and engage your drivers."
              )}
            </p>
            <div style={{ marginTop: "50px" }}>
              <Form />
            </div>
          </div>
        </div>

        <div className="bottom_navbar" style={{ width: "100%" }}>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ marginLeft: "0px", marginTop: "150px" }}
          >
            <ul className="navbar-nav navv mr-auto " style={{ opacity: "0.5" }}>
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
                  <img src={linkedin} alt="Linkedin" className="social_image" />
                </a>
                <a
                  href="https://twitter.com/vivadriveio"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ marginRight: "16px" }}
                >
                  <img src={twitter} alt="Linkedin" className="social_image" />
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

export default Footer;
