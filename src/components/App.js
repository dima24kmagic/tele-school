import React, { Component, Fragment } from "react";
import { Router, Route } from "react-router-dom";
import "./app.scss";
import Nav from "./UI/NAV/Nav";
import history from "../store/history";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Fragment>
            <Nav />
            <Route path="/" component={() => <div>HELLO</div>} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
