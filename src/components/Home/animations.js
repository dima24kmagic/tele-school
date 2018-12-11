import TimelineLite from "gsap/TimelineLite";
import { Power4 } from "gsap";

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
      2,
      { transform: `translateY(5px)` },
      { opacity: 1, transform: `translateY(0)` },
      "-=1.6"
    );
}
