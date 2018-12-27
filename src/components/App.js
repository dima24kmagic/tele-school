import React, { Component, Fragment } from "react";
import { Route, Router } from "react-router-dom";
import history from "../store/history";
import Home from "./Home/Home";
import Footer from "./UI/Footer/Footer";
import Nav from "./UI/NAV/Nav";
import MediaCenter from "./Media/Media";

class App extends Component {
  state = {
    isFirstLoad: true
  };

  onFirstLoad = () => {
    this.setState({
      isFirstLoad: false
    });
  };
  render() {
    const { isFirstLoad } = this.state;
    return (
      <div className="app">
        <Router history={history}>
          <Fragment>
            <Route
              exact
              path="/"
              component={() => (
                <Home isFirstLoad={isFirstLoad} firstLoad={this.onFirstLoad} />
              )}
            />
            <Route path="/media" component={MediaCenter} />
            <Nav toggleAperture={this.toggleAperture} />
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
