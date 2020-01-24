import React, { Component } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

class Plcontact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // let authToken = localStorage.getItem("Token");

  //   const data = {
  //     email: this.state.email,

  //   };

  //   axios({
  //     // Define Method
  //     method: "post",

  //     // Set Access Token URL
  //     url: `https://simpleisbestt.herokuapp.com/api/newsletter/`,
  //     //Set Headers
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //       // "Content-Type": "application/x-www-form-urlencoded"
  //       // Authorization: "Bearer " + JSON.parse(authToken)
  //     },

  //     // Interpolate variables in the strings using Template Literals
  //     data
  //   })
  //     .then(res => {
  //       this.setState({
  //         email:""
  //       });
  //       this.props.history.push("/landing");
  //       Swal.fire({
  //         title: "Thank You For Conatact Us",
  //         type: "success",
  //         text: "We will be in touch with you soon",
  //         showConfirmButton: false,
  //         timer: 7000
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       Swal.fire({
  //         title: "Error",
  //         type: "error",
  //         text: "Error while Sending Email!",
  //         timer: 2000
  //       });
  //       //NotificationManager.error("Error while Creating new book!", "Error!");
  //     });
  // }

  render() {
    return (
      <div id="contactt" class="modal">
        <a href="# " rel="modal:close" className="float-right text-white h4">
          &times;
        </a>
        <div>
          <p className="conatct_header text-center">Skontaktuj się z nami!</p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <form>
            <div className="col-sm-12">
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                placeholder="Twoje imię*"
                name="name"
                required
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
                className="form-control inputt"
              />
            </div>
            <div className="col-sm-12">
              <input
                type="text"
                style={{ border: "1px solid gray" }}
                placeholder="Numer komórkowy*"
                name="phone"
                required
                className="form-control inputt"
              />
            </div>
            <div className="col-sm-12">
              <textarea
                placeholder="Wiadomość (opcjonalne)"
                name="message"
                className="form-control inputt"
                rows={3}
              ></textarea>
            </div>

            <div style={{ marginTop: "30px" }}>
              <center>
                <button className="btn landing_button">WYŚLIJ</button>
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Plcontact;
