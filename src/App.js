import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "./views/Page/Layout/Header";
// import Footer from "./views/Page/Layout/Footer";
import Landing from "./views/Page/Landing";

import "./App.css";
import Polish from "./views/Page/Polish";
import Pt from "./views/Page/Pt/Pt"

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path={baseUrl + "/"} exact component={Landing} />
          {/* <Route path="/" exact component={Landing} /> */}
          <Route path={baseUrl + "/pl/"} component={Polish} />
          <Route path={baseUrl + "/pt/"} component={Pt} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
