import React from "react";
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

import Download from "../Form/Download";

function Content(props) {
  return (
    <div className="land">
      <div className="conatin">
        <div className="row cd" style={{ marginTop: "130px", width: "100%" }}>
          <div className="col-md-6 col-xl-6" style={{ marginTop: "40px" }}>
            <h1 className="landing_heading">{props.main_text}</h1>
            <p className="landing_subtitle" style={{ marginTop: "40px" }}>
              {props.second_text_half}
              <br></br> {props.second_text_left_hlaf}
            </p>

            <Download button={props.button} link={props.link} />
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
          {props.box_header}
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
              {props.first_box_header}
            </p>
            <p className="landing_subtitle">{props.first_box_text}</p>
          </div>
          <div className="col-sm-3 col-md-4 col-xl-3 text-left box_shaoe">
            <div className="image_background">
              <img src={car} alt="key" className="image_key" />
            </div>
            <p className="font-weight-bold text-dark">
              {props.second_box_header}
            </p>
            <p className="landing_subtitle">{props.second_box_text}</p>
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
              {props.third_box_header}
            </p>
            <p className="landing_subtitle">{props.third_box_text}</p>
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
              {props.fourth_box_header}
            </p>
            <p className="landing_subtitle">{props.fourth_box_text}</p>
          </div>
        </div>
      </div>

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
                    {props.first_slide_show_header}
                  </h1>
                  <p className="carsole_subhead">
                    {" "}
                    "{props.first_slide_show_text}"
                  </p>
                  <div className="footer1" style={{ marginLeft: "20px" }}>
                    <p className="name_carsole">
                      {" "}
                      {props.first_slide_show_name}
                    </p>
                    <p className="title_carsole">
                      {props.first_slide_show_position}
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
                    {props.second_slide_show_header}
                  </h1>
                  <p className="carsole_subhead">
                    "{props.second_slide_show_text}"
                  </p>
                  <div className="footer1" style={{ marginLeft: "20px" }}>
                    <p className="name_carsole">
                      {" "}
                      {props.second_slide_show_name}
                    </p>
                    <p className="title_carsole">
                      {" "}
                      {props.second_slide_show_position}
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
                    {props.third_slide_show_header}
                  </h1>
                  <p className="carsole_subhead">
                    "{props.third_slide_show_text}"
                  </p>
                  <div className="footer1" style={{ marginLeft: "20px" }}>
                    <p className="name_carsole">
                      {" "}
                      {props.third_slide_show_name}
                    </p>
                    <p className="title_carsole">
                      {props.third_slide_show_position}
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
                    {props.fourth_slide_show_header}
                  </h1>
                  <p className="carsole_subhead">
                    "{props.fourth_slide_show_text}"
                  </p>
                  <div className="footer1" style={{ marginLeft: "20px" }}>
                    <p className="name_carsole">
                      {" "}
                      {props.fourth_slide_show_name}
                    </p>
                    <p className="title_carsole">
                      {" "}
                      {props.fourth_slide_show_postion}
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
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
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
    </div>
  );
}

export default Content;
