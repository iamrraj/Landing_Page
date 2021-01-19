import React, { useState } from "react";
import { AlertMessage } from "../Contact/Message/Message";
import { SendData } from "../Service/Request";
import text from "../Contact/Message/Translation";

function Download(props) {
  const [contact, setContact] = useState({
    email_id: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const isEnabled = contact.email_id.match(mailformat);

    if (isEnabled) {
      SendData(contact);
      window.open(props.link);
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
