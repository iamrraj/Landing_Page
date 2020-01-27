import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "./views/Page/Layout/Header";
// import Footer from "./views/Page/Layout/Footer";
import Landing from "./views/Page/Landing";

import "./App.css";
import Polish from "./views/Page/Polish";

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path={baseUrl + "/digitalfleet/"} exact component={Landing} />
          {/* <Route path="/" exact component={Landing} /> */}
          <Route path={baseUrl + "/digitalfleet/pl/"} component={Polish} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
