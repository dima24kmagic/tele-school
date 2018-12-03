import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import BurgerButton from "../BurgerButton/BurgerButton";
class Nav extends Component {
  state = {
    isOpen: true
  };
  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <BurgerButton onClick={this.toggleNav} isOpen={isOpen} />
      </Fragment>
    );
  }
}

export default Nav;
