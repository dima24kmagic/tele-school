import React, { Component, Fragment } from "react";
import { Route, Router } from "react-router-dom";
import history from "../store/history";
import Home from "./Home/Home";
import Footer from "./UI/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
