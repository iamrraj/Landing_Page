import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import Plheader from "./Layout/Plheader";
import Plfooter from "./Layout/Plfooter";

import first from "./Image/1.png";
import second from "./Image/2.png";
import third from "./Image/3.png";
import fourth from "./Image/4.png";
import fifth from "./Image/5.png";
import sixth from "./Image/6.png";
import seventh from "./Image/7.png";

import car from "./Image/11.png";
import user from "./Image/Head.png";
import key from "./Image/Shape.png";
import electric from "./Image/Electric.png";
import topimage from "./Image/Group6.png";

import photo1 from "./Image/Photo_1.png";
import photo2 from "./Image/Photo_2.png";
import photo3 from "./Image/Photo_3.png";
import photo4 from "./Image/Photo_4.png";

import photo11 from "./Image/Photo_11.png";
import photo12 from "./Image/Photo_12.png";
import photo13 from "./Image/Photo_13.png";
import photo14 from "./Image/Photo_14.png";
import axios from "axios";
import Swal from "sweetalert2";
import qs from "qs";

const API_PATH = "https://tools.dev.myddp.eu/vivadrive.io/contacts.php";

class Landing extends Component {
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
        this.props.history.push("/digitalfleet/pl");
        Swal.fire({
          title: "Thank you for contacting us",
          type: "success",
          text: "We will get back to you soon",
          showConfirmButton: false,
          timer: 7000
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Error",
          type: "error",
          text: "Error while Sending Email!",
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
    return (
      <div className="land">
        <Plheader />
        {/* <Helmet>Landing Page</Helmet> */}

        <div className="conatin">
          <div className="row cd" style={{ marginTop: "130px", width: "100%" }}>
            <div className="col-md-6 col-xl-6" style={{ marginTop: "40px" }}>
              <h1 className="landing_heading">
                Zaoszczędź 4000 zł na jednym aucie flotowym
              </h1>
              <p className="landing_subtitle" style={{ marginTop: "40px" }}>
                Digital Fleet pomaga zwiększyć wydajność Twojej floty i obniżyć
                całkowity koszt TCO - koszty paliwa, serwisu i ubezpieczenia.
              </p>
              <form
                noValidate
                autoComplete="off"
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
                      onChange={this.change.bind(this)}
                      placeholder=" Twój adres email"
                    />{" "}
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="submit"
                      onClick={e => this.handleFormSubmit(e)}
                      value=" Zacznij oszczędzać!"
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
            Zacznij teraz!
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
                Zmniejszać koszty paliwa i utrzymania floty
              </p>
              <p className="landing_subtitle">
                Dowiedz się kiedy, gdzie i jak używane są Twoje samochody,
                pomaga określić, gdzie i jak można uzyskać oszczędności.
              </p>
            </div>
            <div className="col-sm-3 col-md-4 col-xl-3 text-left box_shaoe">
              <div className="image_background">
                <img src={car} alt="key" className="image_key" />
              </div>
              <p className="font-weight-bold text-dark">
                Obniżać koszt posiadania floty
              </p>
              <p className="landing_subtitle">
                Jedno narzędzie do zarządzania kosztem TCO: paliwo, serwis,
                ubezpieczenie, amortyzacja, ... Digital Fleet pomaga zarządzać i
                optymalizować koszty TCO
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
                Zmieniać zachowanie kierowców
              </p>
              <p className="landing_subtitle">
                Analityka, spersonalizowany program naprawczy, grywalizacja - to
                wszystko tworzy lepszych i bardziej zaangażowanych kierowców i
                zmniejsza koszt TCO
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
                Oszczędzać dzięki pojazdom elektrycznym
              </p>
              <p className="landing_subtitle">
                Pomożemy Ci wprowadzić pojazdy elektryczne do Twojej floty i
                oszczędzić pieniądze i środowisko.
              </p>
            </div>
          </div>
        </div>

        {/* Digital Fleet Section */}

        {/* <div className="conatinn">
          <div className="row" style={{ marginTop: "100px", width: "100%" }}>
            <div className="col-sm-4 don" style={{ marginTop: "30px" }}>
              <h1 className="landing_heading" style={{ fontSize: "45px" }}>
                Digital Fleet
              </h1>

              <p className="landing_subtitle">
                control expenses with insight into your total spend for each
                your assests.Track any expenses, from depreciation to fule
                spend. Easily identify where you are spending too much gain
                insight into where you can reduce costs and create efficiencies
              </p>
            </div>
            <div className="col-sm-8" style={{ marginTop: "30px" }}>
              <div className="digital_image">
                <img
                  src={campaign}
                  alt={campaign}
                  className="digital_image_1"
                />
                <img src={profile} alt={profile} className="digital_image_2" />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="ev conatinnn">
          <div className="row don1" style={{ width: "100%" }}>
            <div className="col-sm-6" style={{ marginTop: "40px" }}>
              <img src={middle} alt="Middle " id="top_image" />
            </div>
            <div className="col-sm-6 sin" style={{ marginTop: "40px" }}>
              <h1 className="landing_heading" style={{ fontSize: "45px" }}>
                EV Recommend
              </h1>
              <p className="landing_subtitle">
                The purpose of all life in development and enrichment.Every
                Human Beign.In fact, every living thing,has an inalienable right
                to all the development to which it is capable.The purpose of all
                life is development and enrichment.Every Human Beign.In fact,
                every living thing,has an inalienable right to all the
                development to which it is capable
              </p>
              <a
                href="# "
                className="font-weight-bold"
                style={{ color: "rgb(183, 28, 28)" }}
              >
                <img
                  src={arrow}
                  alt="Arrow"
                  style={{ width: "30px", marginTop: "-5px" }}
                />{" "}
                Read More.
              </a>
            </div>
          </div>
        </div> */}

        {/* <div className="conatinn ">
          <div className="row" style={{ marginTop: "-60px", width: "100%" }}>
            <div className="col-sm-4 don11" style={{ marginTop: "30px" }}>
              <h1
                className="landing_heading app_header"
                style={{ fontSize: "45px", marginTop: "40px" }}
              >
                Digital Fleet app
              </h1>

              <p className="landing_subtitle">
                The purpose of all life in development and enrichment.Every
                Human Beign.In fact, every living thing,has an inalienable right
                to all the development to which it is capable.The purpose of all
                life is development and enrichment.Every Human Beign.In fact,
                every living thing,has an inalienable right to all the
                development to which it is capable
              </p>
            </div>
            <div className="col-sm-8" style={{}}>
              <div className="digital_image">
                <img src={mobile1} alt="Mobile 1" className="digital_image_3" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="review" style={{ marginTop: "200px" }}>
          {/* <div className="pricing_page ">
            <h1>See what users are saying</h1>
            <p
              className="landing_subtitle pricing_title"
              style={{ marginTop: "-3px", maxWidth: "600px" }}
            >
              The purpose of all life is development and enrichment.Every Human
              Beign.In fact, every living thing.has an inalienable right to all
              the development to which it is
            </p>
          </div>
          */}
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
                      Inteligenty{" "}
                    </h1>
                    <p className="carsole_subhead">
                      {" "}
                      "Współpracujemy z Digital Fleet, wykorzystując technologie
                      Big Data i sztucznej inteligencji, w celu stworzenia
                      inteligentnych produktów dla sektora elektromobilności."{" "}
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Arkadiusz Seredyn</p>
                      <p className="title_carsole">Wiceprezes Synerise</p>
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
                      Efektywny{" "}
                    </h1>
                    <p className="carsole_subhead">
                      "Wykorzystaliśmy system VivaDrive, aby stworzyć program
                      dla młodych kierowców promujący efektywną jazdę i
                      zapobiegający wypadkom drogowym."{" "}
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Karin Genoe</p>
                      <p className="title_carsole">CEO VIAS</p>
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
                      Angażujący{" "}
                    </h1>
                    <p className="carsole_subhead">
                      "Wykorzystaliśmy system VivaDrive, aby stworzyć kulturę
                      bezpiecznej jazdy w naszej organizacji i aby poprawić
                      kluczowe wskaźniki kosztowe naszej floty."
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Ben Weyts</p>
                      <p className="title_carsole">
                        Minister mobilności, Belgia
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
                      Zrównoważony
                    </h1>
                    <p className="carsole_subhead">
                      "VivaDrive jest partnerem technologicznym wyprawy
                      Power4Change 2020 - pierwszej w historii podróży dookoła
                      świata z robotem humanoidalnym NOA, realizowanej
                      samochodem elektrycznym."{" "}
                    </p>
                    <div className="footer1" style={{ marginLeft: "20px" }}>
                      <p className="name_carsole">Marek Kamiński</p>
                      <p className="title_carsole">Słynny polski podróżnik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}

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
          {/* <p className="landing_company_header">
            Trusted by thousands of fleets around the world
          </p> */}
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
          <Plfooter />
        </div>
      </div>
    );
  }
}

export default Landing;
