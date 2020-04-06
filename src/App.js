import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./views/Page/Landing";
import "./App.css";
import Polish from "./views/Page/Polish";
import Pt from "./views/Page/Pt/Pt";
import Fr from "./views/Page/Fr/Fr";

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <BrowserRouter>
        <Switch>
          <Route path={baseUrl + "/"} exact component={Landing} />
          <Route path={baseUrl + "/pl/"} component={Polish} />
          <Route path={baseUrl + "/pt/"} component={Pt} />
          <Route path={baseUrl + "/fr/"} component={Fr} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
