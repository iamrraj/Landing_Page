import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

import first from "../Image/1.png";
import second from "../Image/2.png";
import third from "../Image/3.png";
import fourth from "../Image/4.png";
import fifth from "../Image/5.png";
import sixth from "../Image/6.png";
import seventh from "../Image/7.png";

import car from "../Image/11.png";
import user from "../Image/Head.png";
import key from "../Image/Shape.png";
import electric from "../Image/Electric.png";
import topimage from "../Image/Group6.png";

import photo1 from "../Image/Photo_1.png";
import photo2 from "../Image/Photo_2.png";
import photo3 from "../Image/Photo_3.png";
import photo4 from "../Image/Photo_4.png";

import photo11 from "../Image/Photo_11.png";
import photo12 from "../Image/Photo_12.png";
import photo13 from "../Image/Photo_13.png";
import photo14 from "../Image/Photo_14.png";
import axios from "axios";
import Swal from "sweetalert2";
import qs from "qs";

const API_PATH = "https://tools.dev.myddp.eu/vivadrive.io/contacts.php";

class Fr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: qs.stringify(this.state)
    })
      .then(result => {
        this.setState({
          email: ""
        });
        // this.props.history.push("/digitalfleet/pl");
        Swal.fire({
          title: "Obrigado por nos contactar,",
          icon: "success",
          text: "entraremos em contato em breve.",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Obrigado por nos contactar,",
          icon: "success",
          text: "entraremos em contato em breve.",
          showConfirmButton: false,
          timer: 2000
        });
      });
  };

  async change(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  render() {
    const { email } = this.state;
    const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const isEnabled = email.match(mailformat);
    return (
      <div className="land">
        <Header />

        <div className="conatin">
          <div className="row cd" style={{ marginTop: "130px", width: "100%" }}>
            <div className="col-md-6 col-xl-6" style={{ marginTop: "40px" }}>
              <h1 className="landing_heading">
                Économisez jusqu'à 1000€ par an sur une seule voiture
              </h1>
              <p className="landing_subtitle" style={{ marginTop: "40px" }}>
                Digital Fleet vous aide à augmenter l'efficacité de votre parc{" "}
                automobile et à réduire votre coût total de possession (TCO) -
                frais de carburant, de maintenance et d'assurance.
              </p>
              <form
                noValidate
                autoComplete="off"
                onSubmit={e => this.handleFormSubmit(e)}
                // method="POST"
                // action="https://tools.dev.myddp.eu/vivadrive.io/contacts.php?noredirect=1"
                style={{ marginTop: "40px" }}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      className="form-control"
                      style={{ border: "1px solid gray", height: "38px" }}
                      type="text"
                      name="email"
                      value={this.state.email}
                      autoComplete="off"
                      onChange={this.change.bind(this)}
                      placeholder="Votre adresse e-mail"
                    />{" "}
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="submit"
                      // onClick={e => this.handleFormSubmit(e)}
                      value="COMMENCER À ÉCONOMISER"
                      disabled={!isEnabled}
                      className="btn landing_button pl_button"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5 col-xl-6 pull-right">
              <img
                src={topimage}
                alt="Top Header"
                id="top_image"
                style={{ width: "100wh" }}
              />
            </div>
          </div>
        </div>

        {/* Digital Fleet About Section */}

        <div className="about_fleet centered" style={{ marginTop: "50px" }}>
          <h1 className="landing_heading" style={{ fontSize: "45px" }}>
            Oui, vous pouvez !
          </h1>

          <div
            className="row about_section justify-content-md-center"
            style={{ marginTop: "60px", width: "100%" }}
          >
            <div className="col-sm-3 col-md-4 col-xl-3 text-left box_shaoe">
              <div className="image_background">
                <img src={key} alt="key" className="image_key" />
              </div>
              <p className="font-weight-bold text-dark">
                Réduisez les coûts de carburant et d'entretien
              </p>
              <p className="landing_subtitle">
                Comprenez quand, où et comment vos voitures sont utilisées vous
                aide à identifier où et comment faire des économies.
              </p>
            </div>
            <div className="col-sm-3 col-md-4 col-xl-3 text-left box_shaoe">
              <div className="image_background">
                <img src={car} alt="key" className="image_key" />
              </div>
              <p className="font-weight-bold text-dark">
                Optimisez le TCO de votre parc automobile
              </p>
              <p className="landing_subtitle">
                Un seul outil pour tout gérer dans votre flotte : carburant,
                maintenance, assurance, dépréciation ... Digital Fleet regroupe
                tout en un seul endroit et vous aide à optimiser.
              </p>
            </div>
            <div className="col-sm-3 col-md-4 col-xl-3 text-left box_shaoe">
              <div className="image_background">
                <img
                  src={user}
                  alt="key"
                  className="image_key"
                  style={{ width: "40px" }}
                />
              </div>
              <p className="font-weight-bold text-dark">
                Changez le comportement de vos conducteurs
              </p>
              <p className="landing_subtitle">
                Des analyses, des retours personnalisés, de la ludification et
                un programme de motivation pour développer de meilleurs
                conducteurs et réduire votre coût total de possession (TCO).
              </p>
            </div>

            <div className="col-sm-3 col-md-4 col-xl-3 text-left box_shaoe">
              <div className="image_background">
                <img
                  src={electric}
                  alt="key"
                  className="image_key"
                  style={{ transform: "rotate(00deg)" }}
                />
              </div>
              <p className="font-weight-bold text-dark">
                Commencez à économiser avec les véhicules électriques
              </p>
              <p className="landing_subtitle">
                Nous vous aiderons à introduire des véhicules électriques dans
                votre parc automobile - économisez de l'argent et protégez
                l'environnement.
              </p>
            </div>
          </div>
        </div>

        {/* Digital Fleet Section */}

        <div className="review" style={{ marginTop: "200px" }}>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            data-interval="10000"
            style={{ marginTop: "30px" }}
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-5 col-sm-6">
                    <img
                      class="d-block "
                      src={photo1}
                      alt="First slide"
                      style={{ height: "480px" }}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 cardd right">
                    <div style={{ marginTop: "50px" }}>
                      {" "}
                      <img
                        class="d-block "
                        src={photo11}
                        alt="First slide"
                        style={{ width: "120px" }}
                      />{" "}
                    </div>
                    <h1 className="carsole_head" style={{ marginTop: "50px" }}>
                      C'est intelligent{" "}
                    </h1>
                    <p className="carsole_subhead">
                      {" "}
                      "Nous travaillons conjointement avec Digital Fleet pour
                      appliquer le Big Data et l'IA dans l'élaboration de
                      produits pour l'électromobilité."{" "}
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Arkadiusz Seredyn</p>
                      <p className="title_carsole">
                        Vice-Président de Synerise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-5 col-sm-6 ">
                    <img
                      class="d-block "
                      src={photo2}
                      alt="First slide"
                      style={{ height: "480px" }}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 cardd">
                    <div style={{ marginTop: "50px" }}>
                      {" "}
                      <img
                        class="d-block "
                        src={photo12}
                        alt="First slide"
                        style={{ height: "40px" }}
                      />{" "}
                    </div>
                    <h1 className="carsole_head" style={{ marginTop: "50px" }}>
                      C'est efficace{" "}
                    </h1>
                    <p className="carsole_subhead">
                      "Nous avons utilisé DigitalFleet de VivaDrive pour créer
                      un programme amusant pour les jeunes conducteurs. Cette
                      solution fait un bon travail de promotion de l'efficacité
                      de la conduite et prévient les accidents de la route."{" "}
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Karin Genoe</p>
                      <p className="title_carsole">PDG de VIAS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-5 col-sm-6">
                    <img
                      class="d-block "
                      src={photo3}
                      alt="First slide"
                      style={{ height: "480px" }}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 cardd">
                    <div style={{ marginTop: "50px" }}>
                      {" "}
                      <img
                        class="d-block "
                        src={photo13}
                        alt="First slide"
                        style={{ width: "120px" }}
                      />{" "}
                    </div>
                    <h1 className="carsole_head" style={{ marginTop: "50px" }}>
                      C'est engageant{" "}
                    </h1>
                    <p className="carsole_subhead">
                      "Nous avons utilisé Digital Fleet par VivaDrive pour
                      encourager nos employés à avoir conscience de la sécurité
                      routière au sein de notre organisation et pour améliorer
                      les KPI internes de la flotte."
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Ben Weyts</p>
                      <p className="title_carsole">
                        Ministre flamand de la Mobilité
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-5 col-sm-6">
                    <img
                      class="d-block "
                      src={photo4}
                      alt="First slide"
                      style={{ height: "480px" }}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 cardd">
                    <div style={{ marginTop: "50px" }}>
                      {" "}
                      <img
                        class="d-block "
                        src={photo14}
                        alt="First slide"
                        style={{ width: "120px" }}
                      />{" "}
                    </div>
                    <h1 className="carsole_head" style={{ marginTop: "50px" }}>
                      C'est durable
                    </h1>
                    <p className="carsole_subhead">
                      "VivaDrive est un partenaire technologique de l'expédition
                      Power4Change 2020 - tout premier voyage autour du monde
                      avec un robot humanoïde NOA, réalisé dans un véhicule
                      électrique."
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Marek Kamiński</p>
                      <p className="title_carsole">
                        Célèbre explorateur polonais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
          </div>
        </div>

        {/* Digital Fleet Work Company Section */}

        <div
          className="work_with_company text-center"
          style={{ marginTop: "120px" }}
        >
          <div className="landing_image_section">
            <center>
              <img src={first} alt="First" className="landing_image" />
              <img src={second} alt="Second" className="landing_image" />
              <img src={third} alt="Third" className="landing_image" />
              <img src={fourth} alt="Four" className="landing_image" />
              <img src={fifth} alt="Five" className="landing_image" />
              <img src={sixth} alt="Six" className="landing_image" />
              <img src={seventh} alt="Seven" className="landing_image" />
            </center>
          </div>
        </div>

        <div>
          <Footer
            submit={this.handleFormSubmit}
            change={this.change.bind(this)}
            state={this.state.email}
          />
        </div>
      </div>
    );
  }
}

export default Fr;
