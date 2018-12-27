import React, { Component } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import NavList from "./NavList/NavList";
import "./nav.scss";
import { AnimateNavClose, AnimateNavOpen } from "../../Home/animations";

class Nav extends Component {
  constructor() {
    super();
    this.navItems = [
      { path: "/", text: "Главная" },
      { path: "/history", text: "История" },
      { path: "/achieves", text: "Наши достижения" },
      { path: "/media", text: "Медиацентр" },
      { path: "/4teachers", text: "Учителям" }
    ];
  }
  state = {
    isOpen: false
  };
  toggleNav = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      const { isOpen } = this.state;
      if (isOpen) {
        this.setState({
          isOpen: !this.state.isOpen
        });
        AnimateNavClose();
      } else {
        this.setState({ isOpen: !this.state.isOpen });
        AnimateNavOpen();
      }
    }
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div className="navigation">
        <BurgerButton onClick={this.toggleNav} isOpen={isOpen} />
        <NavList navItems={this.navItems} toggleNav={this.toggleNav} />
      </div>
    );
  }
}

export default Nav;
