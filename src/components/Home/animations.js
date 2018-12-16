import TimelineLite from "gsap/TimelineLite";
import TweenLite from "gsap/TweenLite";
import { Power4 } from "gsap";

export function AnimateNavOpen() {
  var navWrapper = document.querySelector(".nav-list");
  TweenLite.fromTo(
    navWrapper,
    0.25,
    {
      transform: `translateX(100%)`,
      ease: Power4.easeInOut
    },
    {
      transform: `translateX(0%)`,
      ease: Power4.easeInOut
    }
  );
}

export function AnimateNavClose() {
  var navWrapper = document.querySelector(".nav-list");
  TweenLite.fromTo(
    navWrapper,
    0.5,
    {
      transform: `translateX(0%)`,
      ease: Power4.easeInOut
    },
    {
      transform: `translateX(100%)`,
      ease: Power4.easeInOut
    }
  );
}

export function AnimateHomeIntro() {
  var shutterContainer = document.querySelector(".shutter");
  var shutterTop = document.querySelector(".shutter--1");
  var shutterBot = document.querySelector(".shutter--2");
  var introWords = document.querySelector(".intro__words");
  var introBrn = document.querySelector(".intro__btn");
  var tl = new TimelineLite();
  tl.to(shutterTop, 5, {
    transform: `translateY(-100%)`,
    display: "none",
    ease: Power4.easeInOut
  })
    .to(
      shutterBot,
      5,
      {
        transform: `translateY(100%)`,
        display: "none",
        ease: Power4.easeInOut
      },
      "-=5"
    )
    .to(shutterContainer, 0, { display: "none" })
    .fromTo(
      introWords,
      2,
      { transform: `translateY(-5px)` },
      { opacity: 1, transform: `translateY(0)` },
      "-=2"
    )
    .fromTo(
      introBrn,
      1,
      { transform: `translateY(5px)` },
      { opacity: 1, transform: `translateY(0)` },
      "-=1.6"
    );
}
