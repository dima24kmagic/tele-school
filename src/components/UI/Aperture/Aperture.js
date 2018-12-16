import React, { Component } from "react";
import TweenLite from "gsap/TweenLite";
import "./aperture.scss";

class Aperture extends Component {
  componentDidMount() {
    var diaphs = document.querySelectorAll(".diaph");

    const duration = 0.1;
    diaphs.forEach((diaph, i) => {
      switch (i) {
        case 0: {
          TweenLite.to(diaph, duration, {
            top: "-4%",
            left: "50%"
          });
          break;
        }
        case 1: {
          TweenLite.to(diaph, duration, {
            top: "24%",
            left: "99%"
          });
          break;
        }
        case 2: {
          TweenLite.to(diaph, duration, {
            top: "67%",
            left: "104%"
          });
          break;
        }
        case 3: {
          TweenLite.to(diaph, duration, {
            top: "104%",
            left: "50%"
          });
          break;
        }
        case 4: {
          TweenLite.to(diaph, duration, {
            top: "87%",
            left: "11%"
          });
          break;
        }
        case 5: {
          TweenLite.to(diaph, duration, {
            top: "37%",
            left: "-3%"
          });
          break;
        }
        default:
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="my-container">
          <div className="diaph" />
          <div className="diaph" />
          <div className="diaph" />
          <div className="diaph" />
          <div className="diaph" />
          <div className="diaph" />
          {/*<div className="diaph" />*/}
        </div>
      </div>
    );
  }
}

export default Aperture;
