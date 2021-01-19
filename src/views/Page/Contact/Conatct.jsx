import React, { useState } from "react";
import { AlertMessage } from "./Message/Message";
import text from "./Message/Translation";
import { SendData } from "../Service/Request";

function Conatct() {
  const [contact, setContact] = useState({
    name: "",
    company_name: "",
    email_id: "",
    phone_number: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const isEnabled = contact.email_id.match(mailformat);

    if (isEnabled) {
      SendData(contact);
    } else {
      AlertMessage("Warning !!", "Email is Required !", "warning");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div id="contactt" class="modal">
      <a href="# " rel="modal:close" className="float-right text-white h4">
        &times;
      </a>
      <div>
        <p className="conatct_header text-center">
          {" "}
          {text(
            "Skontaktuj się z nami!",
            "Fala connosco",
            "Contactez nous",
            "Get in touch with us"
          )}
        </p>
      </div>
      <div style={{ marginTop: "40px" }}>
        <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
          <div className="col-sm-12">
            <input
              type="text"
              style={{ border: "1px solid gray" }}
              placeholder={text("Twoje imię*", "Nome*", "Nom*", "Name*")}
              name="name"
              onChange={handleInputChange}
              required
              className="form-control "
              id="inputt"
            />
          </div>
          <div className="col-sm-12">
            <input
              type="text"
              style={{ border: "1px solid gray" }}
              placeholder={text(
                "Twoje imię*",
                "Companhia*",
                "Nom de l'entreprise*",
                "Company name *"
              )}
              required
              name="company_name"
              onChange={handleInputChange}
              className="form-control inputt "
              id="inputt"
            />
          </div>
          <div className="col-sm-12">
            <input
              type="email"
              placeholder={text(
                "Adres email*",
                "Email*",
                "Adresse e-mail*",
                "Email address*"
              )}
              name="email_id"
              required
              onChange={handleInputChange}
              className="form-control inputt"
            />
          </div>
          <div className="col-sm-12">
            <input
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              style={{ border: "1px solid gray" }}
              placeholder={text(
                "Numer komórkowy (opcjonalne)",
                "Numero de telefone (opcional)",
                "Numéro de téléphone (optionnel)",
                "Phone number"
              )}
              name="phone_number"
              required
              onChange={handleInputChange}
              className="form-control inputt"
            />
          </div>
          <div className="col-sm-12">
            <textarea
              placeholder={text(
                "Wiadomość (opcjonalne)",
                "Mensagem (opcional)",
                "Message (optionnel)",
                "Message (Optional)"
              )}
              name="message"
              onChange={handleInputChange}
              className="form-control inputt"
              rows={3}
            ></textarea>
          </div>

          <div style={{ marginTop: "30px" }}>
            <center>
              <input
                type="submit"
                value="SEND MESSAGE"
                className="btn landing_button"
              />
            </center>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Conatct;
