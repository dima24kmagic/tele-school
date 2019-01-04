import React, { Component, Fragment } from "react";
import { Route, Router } from "react-router-dom";
import history from "../store/history";
import Home from "./Home/Home";
import Footer from "./UI/Footer/Footer";
import Nav from "./UI/NAV/Nav";
import MediaCenter from "./Media/MediaCenter";
import { getVideos } from "../utils/api";

class App extends Component {
  state = {
    isFirstLoad: true,
    videos: null
  };

  componentWillMount = async () => {
    const videos = await getVideos();
    this.setState({
      videos
    });
  };

  onFirstLoad = () => {
    this.setState({
      isFirstLoad: false
    });
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
                <Home isFirstLoad={isFirstLoad} firstLoad={this.onFirstLoad} />
              )}
            />
            <Route
              path="/media"
              component={() => <MediaCenter videos={videos} />}
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
