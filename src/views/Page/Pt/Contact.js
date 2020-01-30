import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import qs from "qs";
import "../Layout/hide";

const API_PATH = "https://tools.dev.myddp.eu/vivadrive.io/contacts.php";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            cname: "",
            email: "",
            phone: "",
            message: ""
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
                //this.props.history.push("/digitalfleet/");
                Swal.fire({
                    title: "Thank you for contacting us",
                    type: "success",
                    text: "We will get back to you soon",
                    showConfirmButton: false,
                    timer: 2000
                });
                this.props.onRequestHide();
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    title: "Thank you for contacting us",
                    type: "success",
                    text: "We will get back to you soon",
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
                    <p className="conatct_header text-center">Fala connosco</p>
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
                                placeholder="Nome*"
                                name="name"
                                onChange={this.change.bind(this)}
                                required
                                className="form-control "
                                id="inputt"
                            />
                        </div>
                        <div className="col-sm-12">
                            <input
                                type="text"
                                style={{ border: "1px solid gray" }}
                                placeholder="Companhia*"
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
                                placeholder="Email*"
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
                                placeholder="Numero de telefone*"
                                name="phone"
                                required
                                onChange={this.change.bind(this)}
                                className="form-control inputt"
                            />
                        </div>
                        <div className="col-sm-12">
                            <textarea
                                placeholder="Mensagem (opcional)"
                                name="message"
                                onChange={this.change.bind(this)}
                                className="form-control inputt"
                                rows={3}
                            ></textarea>
                        </div>

                        <div style={{ marginTop: "30px" }}>
                            <center>
                                <input
                                    type="submit"
                                    value="ENVIAR MENSAGEM"
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

export default Contact;
