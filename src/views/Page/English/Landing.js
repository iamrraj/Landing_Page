import React, { Component } from "react";
import Content from "../Content/Content";

class Landing extends Component {
  render() {
    return (
      <>
        <Content
          main_text=" Save up to €1000 annually on a single fleet car"
          second_text_half=" Digital Fleet helps you increase your fleet efficiency and will
          reduce your TCO - fuel, service and insurance costs."
          second_text_left_hlaf=""
          button="DOWNLOAD LEAFLET"
          link="https://storage.waw.cloud.ovh.net/v1/AUTH_9c3bbac620464ace851c819300f9c925/digitalfleet-media/EN_DigitalFleet-Leaflet.pdf"
          box_header=" Yes, you can!"
          first_box_header=" Reduce fuel and maintenance cost"
          first_box_text=" Understanding when, where and how your cars are being used helps
          you identify where and how savings can be made."
          second_box_header=" Optimise your fleet TCO"
          second_box_text="One fleet tool to rule them all: fuel, service , insurance,
          depreciation ... Digital Fleet keeps it all in one place and
          helps you optimise it."
          third_box_header=" Change your driver's behaviour"
          third_box_text="Analytics, personalised feedback, gamification, and a motivation
          program to build better drivers and reduce your TCO cost. "
          fourth_box_header=" Start saving with Electric Vehicles"
          fourth_box_text=" We will help you introduce Electric Vehicles In your fleet -
          save money and the environment."
          first_slide_show_header="  It's intelligent"
          first_slide_show_text="We are jointly working with Digital Fleet to apply Big
          Data and AI to build products for electromobility."
          first_slide_show_name="Arkadiusz Seredyn"
          first_slide_show_position="VP Synerise "
          second_slide_show_header="It's efficient"
          second_slide_show_text="We used VivaDrive's Digital Fleet to create a fun program for young drivers. It's doing a good job promoting driving efficiency and it prevents road accidents."
          second_slide_show_name="Karin Genoe"
          second_slide_show_position="CEO VIAS"
          third_slide_show_header=" It's engaging"
          third_slide_show_text="We used Digital Fleet by VivaDrive to encourage employees
          to create a traffic safety culture within our organization
          and to improve internal fleet KPIs."
          third_slide_show_name="Ben Weyts"
          third_slide_show_position="Flemish Minister of Mobility"
          fourth_slide_show_header=" It's sustainable"
          fourth_slide_show_text="VivaDrive is a technology partner of Power4Change 2020 Expedition - first-ever trip around the world with an NOA humanoid robot, realised in an Electric Vehicle."
          fourth_slide_show_name="Marek Kamiński"
          fourth_slide_show_postion="Famous Polish explorer"
        />
      </>
    );
  }
}

export default Landing;
