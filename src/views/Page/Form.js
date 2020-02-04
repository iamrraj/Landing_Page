import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import qs from "qs";
const API_PATH = "https://tools.dev.myddp.eu/vivadrive.io/contacts.php";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
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
          email: ""
        });
        // this.props.history.push("/digitalfleet/");
        Swal.fire({
          title: "Thank you for contacting us",
          icon: "success",
          text: "We will get back to you soon",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Error",
          icon: "error",
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
    const { email } = this.state;
    const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    const isEnabled = email.match(mailformat);
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={e => this.handleFormSubmit(e)}
      // method="POST"
      // onSubmit={this.handleSubmit1.bind(this)}
      // action="https://tools.dev.myddp.eu/vivadrive.io/contacts.php?noredirect=1"
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
              placeholder="Your email address"
            />{" "}
          </div>
          <div className="col-sm-4">
            <input
              type="submit"
              // onClick={e => this.handleFormSubmit(e)}
              value=" START SAVING"
              disabled={!isEnabled}
              className="btn landing_button"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
