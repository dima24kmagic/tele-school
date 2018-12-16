import React, {Component, Fragment} from "react";
import {Route, Router} from "react-router-dom";
import history from "../store/history";
import Home from "./Home/Home";
import Footer from "./UI/Footer/Footer";
import Nav from "./UI/NAV/Nav";
import axios from "axios";
class App extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Fragment>
            <Nav toggleAperture={this.toggleAperture} />
            <Route exact path="/" component={Home} />
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
