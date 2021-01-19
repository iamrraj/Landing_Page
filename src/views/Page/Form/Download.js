import React, { useState } from "react";
import { AlertMessage } from "../Contact/Message/Message";
import message from "../Contact/Message/Text";
import text from "../Contact/Message/Translation";
import axios from "axios";

const API = `https://digitalfleet.eu/api/1/tos/contact/`;
function Download(props) {
  const [contact, setContact] = useState({
    email_id: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const isEnabled = contact.email_id.match(mailformat);

    if (isEnabled) {
      axios({
        method: "POST",
        url: API,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: contact,
      })
        .then((result) => {
          if (result.status === 201) {
            message();

            window.open(props.link);
          } else {
            AlertMessage(
              "Error",
              "There is some error while sending information",
              "error"
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      AlertMessage("Warning !!", "Email is Required !", "warning");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleFormSubmit}
      // method="POST"
      // action="https://tools.dev.myddp.eu/vivadrive.io/contacts.php"
      style={{ marginTop: "30px" }}
    >
      <div className="row">
        <div className="col-sm-6">
          <input
            className="form-control"
            style={{ border: "1px solid gray", height: "38px" }}
            type="email"
            autoComplete="off"
            name="email_id"
            onChange={handleInputChange}
            placeholder={text(
              "Adres email*",
              "Email*",
              "Adresse e-mail*",
              "Email address*"
            )}
          />{" "}
        </div>
        <div className="col-sm-4">
          <button
            className="btn landing_button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.button}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Download;
