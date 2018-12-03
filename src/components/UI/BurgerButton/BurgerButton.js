import React from "react";
import "./burger.scss";
function BurgerButton({ isOpen, onClick }) {
  return (
    <div className="burger-btn" onClick={onClick}>
      <div className={`icn ${isOpen ? "icn--open" : ""}`}>
        <span className="icn__line" />
        <span className="icn__line" />
        <span className="icn__line" />
      </div>
    </div>
  );
}

export default BurgerButton;
