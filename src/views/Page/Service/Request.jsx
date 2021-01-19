import axios from "axios";
import message from "../Contact/Message/Text";
import { AlertMessage } from "../Contact/Message/Message";

const API = `https://digitalfleet.eu/api/1/tos/contact/`;

export const SendData = (data) => {
  axios({
    method: "POST",
    url: API,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((result) => {
      if (result.status === 201) {
        message();

        setTimeout(function () {
          window.location.reload(1);
        }, 2000);
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
};
