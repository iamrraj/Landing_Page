import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import qs from "qs";
import "./Layout/hide";

const API_PATH = "https://tools.dev.myddp.eu/vivadrive.io/contacts.php";

class Plcontact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cname: "",
      email: "",
      phone: "",
      message: ""
      // mailSent: false
    };
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
          name: "",
          cname: "",
          email: "",
          phone: "",
          message: ""
        });
        // this.props.history.push("/digitalfleet/pl");
        Swal.fire({
          title: "Dziękujemy za kontakt,",
          type: "success",
          text: "skontaktujemy się z Tobą wkrótce.",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Dziękujemy za kontakt,",
          type: "success",
          text: "skontaktujemy się z Tobą wkrótce.",
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
    const { email, phone } = this.state;
    const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const isEnabled = email.match(mailformat) && phone.length > 8;
    return (
      <div id="contactt" class="modal">
        <a href="# " rel="modal:close" className="float-right text-white h4">
          &times;
        </a>
        <div>
          <p className="conatct_header text-center">Skontaktuj się z nami!</p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={e => this.handleFormSubmit(e)}
          >
            <div className="col-sm-12">
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                placeholder="Twoje imię*"
                name="name"
                required
                onChange={this.change.bind(this)}
                className="form-control "
                id="inputt"
              />
            </div>
            <div className="col-sm-12">
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                placeholder="Nazwa firmy*"
                required
                name="cname"
                onChange={this.change.bind(this)}
                className="form-control inputt "
                id="inputt"
              />
            </div>
            <div className="col-sm-12">
              <input
                type="email"
                placeholder="Adres email*"
                name="email"
                required
                onChange={this.change.bind(this)}
                className="form-control inputt"
              />
            </div>
            <div className="col-sm-12">
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                placeholder="Numer komórkowy*"
                name="phone"
                onChange={this.change.bind(this)}
                required
                className="form-control inputt"
              />
            </div>
            <div className="col-sm-12">
              <textarea
                placeholder="Wiadomość (opcjonalne)"
                name="message"
                className="form-control inputt"
                onChange={this.change.bind(this)}
                rows={3}
              ></textarea>
            </div>

            <div style={{ marginTop: "30px" }}>
              <center>
                <input
                  type="submit"
                  value="WYŚLIJ"
                  disabled={!isEnabled}
                  className="btn landing_button"
                />
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Plcontact;
