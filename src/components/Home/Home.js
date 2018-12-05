import React, { Component } from "react";
import { TweenLite, Power4 } from "gsap";
import "./home.scss";
class Home extends Component {
  componentDidMount() {
    var shutterTop = document.querySelector(".shutter--1");
    var shutterBot = document.querySelector(".shutter--2");
    var introWords = document.querySelector(".intro__words");
    var duration = 4;
    setTimeout(() => {
      TweenLite.to(shutterTop, duration, {
        transform: `translateY(-100%)`,
        display: "none",
        ease: Power4.easeInOut
      });
      TweenLite.to(shutterBot, duration, {
        transform: `translateY(100%)`,
        display: "none",
        ease: Power4.easeInOut
      });
    }, 1500);

    setTimeout(() => {
      TweenLite.fromTo(
        introWords,
        2,
        {
          transform: `translateY(-5px)`
        },
        {
          opacity: 1,
          transform: `translateY(0px)`
        }
      );
    }, 4500);
  }

  render() {
    return (
      <div className="home">
        <div className="bg">
          <div className="bg__overlay" />
        </div>
        <div className="shutter">
          <div className="shutter--1" />
          <div className="shutter--2" />
        </div>
        <div className="container p-0 d-flex align-items-center justify-content-center intro">
          <p className="display-1 text-light intro__words">
            Школьный телецентр
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
