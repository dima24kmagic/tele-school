import React, { Component, Fragment } from "react";
import { Route, Router } from "react-router-dom";
import history from "../store/history";
import Home from "./Home/Home";
import Footer from "./UI/Footer/Footer";
import Nav from "./UI/NAV/Nav";
import MediaCenter from "./Media/MediaCenter";
import { getVideos } from "../utils/api";

class App extends Component {
  constructor() {
    super();
    this.isFirstLoad = true;
    this.videos = [];
  }
  state = {
    isFirstLoad: true,
    videos: null
  };

  componentWillMount = async () => {
    this.videos = await getVideos();
  };

  onFirstLoad = () => {
    this.isFirstLoad = false;
  };
  render() {
    const { isFirstLoad, videos } = this.state;
    return (
      <div className="app">
        <Router history={history}>
          <Fragment>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  isFirstLoad={this.isFirstLoad}
                  firstLoad={this.onFirstLoad}
                />
              )}
            />
            <Route
              path="/media"
              component={() => <MediaCenter videos={this.videos} />}
            />
            <Route
              path="/history"
              component={() => <div className="content" />}
            />
            <Route
              path="/achieves"
              component={() => <div className="content" />}
            />
            <Route
              path="/4teachers"
              component={() => <div className="content" />}
            />
            <Nav toggleAperture={this.toggleAperture} />
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
