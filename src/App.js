import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./views/Page/English/Landing";
import "./App.css";
import Polish from "./views/Page/Polish/Polish";
import Pt from "./views/Page/Port/Pt";
import Fr from "./views/Page/France/Fr";
import Header from "./views/Page/Layout/Header";
import Footer from "./views/Page/Layout/footer";

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={baseUrl + "/"} exact component={Landing} />
          <Route path={baseUrl + "/pl/"} component={Polish} />
          <Route path={baseUrl + "/pt/"} component={Pt} />
          <Route path={baseUrl + "/fr/"} component={Fr} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
