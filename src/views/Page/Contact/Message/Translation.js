const baseUrl = process.env.PUBLIC_URL;

const text = (polish, port, french, english) =>
  window.location.pathname === baseUrl + "/pl/"
    ? polish
    : window.location.pathname === baseUrl + "/pt/"
    ? port
    : window.location.pathname === baseUrl + "/fr/"
    ? french
    : english;

export default text;
