import { AlertMessage } from "./Message";
const baseUrl = process.env.PUBLIC_URL;

const message = () =>
  window.location.pathname === baseUrl + "/pl/" ||
  window.location.pathname === baseUrl + "/pl"
    ? AlertMessage(
        "Dziękujemy za kontakt,",
        "skontaktujemy się z Tobą wkrótce !",
        "success"
      )
    : window.location.pathname === baseUrl + "/pt/" ||
      window.location.pathname === baseUrl + "/pt"
    ? AlertMessage(
        "Obrigado por nos contactar,",
        "Entraremos em contacto em breve!",
        "success"
      )
    : window.location.pathname === baseUrl + "/fr/" ||
      window.location.pathname === baseUrl + "/fr"
    ? AlertMessage(
        "Merci de nous contacter",
        "Nous reviendrons vers vous bientôt !",
        "success"
      )
    : AlertMessage(
        "Thank you for contacting us,",
        "We will get back to you soon !",
        "success"
      );

export default message;
