import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./views/Page/Layout/Header";
import Footer from "./views/Page/Layout/Footer";
import Landing from "./views/Page/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
