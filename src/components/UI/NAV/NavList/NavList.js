import React, { Component } from "react";
import "./nav-list.scss";
import { NavLink } from "react-router-dom";

class NavList extends Component {
  render() {
    const { navItems, toggleNav } = this.props;
    return (
      <div className="nav-list">
        <div className="items-wrapper">
          {navItems.map(({ path, text }) => {
            const isExact = path === "/";
            return (
              <NavLink
                className="items-wrapper__item"
                exact={isExact}
                to={path}
                key={path}
                onClick={toggleNav}
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavList;
