import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Layout/Header";
import tick from "./Image/tick.png";
import Footer from "./Layout/Footer";

class Pricing extends Component {
  render() {
    return (
      <div className="land">
        <Header />
        <Helmet>Pricing</Helmet>

        <div className="pricing_page " style={{ marginTop: "90px" }}>
          <h1>Choose Your Plan</h1>
          <p
            className="landing_subtitle pricing_title"
            style={{ marginTop: "-3px", maxWidth: "500px" }}
          >
            {" "}
            The purpose of all life is development and enrichment.Every Human
            Beign.In fact, every living thing.has an inalienable right to all
            the
          </p>
        </div>

        <div className="pricing_box " style={{ marginTop: "40px" }}>
          {/* Starting here pricing box  */}
          <div className="row  image_lanfin">
            <div className="col-sm-6 " id="boxxx">
              <div className="pricing_box_col box_2 text-center">
                <p className="font-weight-bold" style={{ marginTop: "10px" }}>
                  Starter
                </p>
                <h1 className="pricing_price">
                  1500$
                  <span className="h5" style={{ opacity: "0.5" }}>
                    /mo
                  </span>
                </h1>

                <ul className="text-left list">
                  <li className="pricing_list">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Modern dashboard
                  </li>
                  <li className="pricing_list">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Statics
                  </li>
                  <li className="pricing_list">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Metrics and Profiles
                  </li>
                </ul>

                <div
                  className="pricing_button"
                  style={{ marginTop: "40px", marginBottom: "-8px" }}
                >
                  <a href="# " className="btn landing_button">
                    GET STARTED
                  </a>
                </div>
              </div>

              <div className="more_details" style={{ marginTop: "30px" }}>
                <p className="font-weight-bold pricing_list_header">Best for</p>
                <p className="font-weight-bold pricing_list_subheader">
                  Small teams starting explore that fleet management
                </p>
                <ul className=" list">
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Modern dashboard
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Statics
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Metrics management
                  </li>
                  <div style={{ opacity: "0.3", marginLeft: "28px" }}>
                    <li
                      className="pricing_list1"
                      style={{ textDecoration: "line-through" }}
                    >
                      Profile management
                    </li>
                    <li
                      className="pricing_list1"
                      style={{ textDecoration: "line-through" }}
                    >
                      Costs management
                    </li>
                    <li
                      className="pricing_list1"
                      style={{ textDecoration: "line-through" }}
                    >
                      Adjustable report
                    </li>
                    <li
                      className="pricing_list1"
                      style={{ textDecoration: "line-through" }}
                    >
                      Campaigns platform
                    </li>
                    <li
                      className="pricing_list1"
                      style={{ textDecoration: "line-through" }}
                    >
                      Functional notifications
                    </li>
                    <li
                      className="pricing_list1"
                      style={{ textDecoration: "line-through" }}
                    >
                      Alarming system
                    </li>
                    <li
                      className="pricing_list1"
                      style={{ textDecoration: "line-through" }}
                    >
                      Advanced settings
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            {/* Here is another Row For Compnay Box */}
            <div className="col-sm-6 ">
              <div className="pricing_box_col box_2 text-center">
                <p className="font-weight-bold" style={{ marginTop: "10px" }}>
                  Compnay
                </p>
                <h1 className="pricing_price">Custom</h1>

                <ul className="text-left list">
                  <li className="pricing_list">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Profile management
                  </li>
                  <li className="pricing_list">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Costs management
                  </li>
                  <li className="pricing_list">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Adjustable report
                  </li>
                </ul>

                <div
                  className="pricing_button"
                  style={{ marginTop: "40px", marginBottom: "-8px" }}
                >
                  <a href="# " className="btn landing_button">
                    GET STARTED
                  </a>
                </div>
              </div>

              <div className="more_details" style={{ marginTop: "30px" }}>
                <p className="font-weight-bold pricing_list_header">Best for</p>
                <p className="font-weight-bold pricing_list_subheader">
                  Small teams starting explore that fleet management
                </p>
                <ul className=" list">
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Modern dashboard
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Statics
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Metrics management
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Profile management
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Costs management
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Adjustable report
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Campaigns platform
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Functional notifications
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Alarming system
                  </li>
                  <li className="pricing_list1">
                    <img src={tick} alt="Right Tick" className="tick" />
                    Advanced settings
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Starting here more details */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Pricing;
