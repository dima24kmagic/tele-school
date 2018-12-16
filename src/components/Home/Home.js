import React, { Component, Fragment } from "react";
import "./home.scss";
import { AnimateHomeIntro } from "./animations";

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      AnimateHomeIntro();
    }, 1500);
  }

  render() {
    return (
      <Fragment>
        <div className="home">
          <div className="bg">
            <div className="bg__overlay" />
          </div>
          <div className="shutter">
            <div className="shutter--1" />
            <div className="shutter--2" />
          </div>
          <div className="container intro">
            <p className="display-1 text-light intro__words shadowed">
              Школьный телецентр
            </p>
            <button className="intro__btn text-light shadowed">
              Узнать больше
            </button>
          </div>
        </div>
        <div className="container info-content">
          <h1>Какой-то загаловок</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusantium debitis delectus inventore laboriosam maxime mollitia
            neque porro quis quisquam rerum, similique vitae. Cumque facilis
            optio possimus, quo unde ut.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Home;
