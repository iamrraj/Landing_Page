import React, { Component } from 'react'
import axios from "axios";
import Swal from "sweetalert2";

class Form extends Component {
     constructor(props){
    super(props);
    this.state ={
      email:"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


async change(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let authToken = localStorage.getItem("Token");

    const data = {
      email: this.state.email,
     
    };

    axios({
      // Define Method
      method: "post",

      // Set Access Token URL
      url: `https://simpleisbestt.herokuapp.com/api/newsletter/`,
      //Set Headers
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded"
        // Authorization: "Bearer " + JSON.parse(authToken)
      },

      // Interpolate variables in the strings using Template Literals
      data
    })
      .then(res => {
        this.setState({
          email:""
        });
        this.props.history.push("/landing");
        Swal.fire({
          title: "Thank You For Conatact Us",
          type: "success",
          text: "We will be in touch with you soon",
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
  }

    render() {
        return (
            <form  noValidate
            autoComplete="off"
            onSubmit={this.props.load}>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    className="form-control"
                    style={{ border: "1px solid gray", height: "38px" }}
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange = {this.change.bind(this)}
                    placeholder="Your email address"
                  />{" "}
                </div>
                <div className="col-sm-4">
                  <button className="btn landing_button">
                    START SAVING
                  </button>
                </div>
              </div>
              </form>
        )
    }
}

export default Form;
