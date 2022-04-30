import React from "react";
import miniLogo from "../../assets/img/mini-logo.jpg";
import Button from "../Button/Button";
import Search from "../Search/Search";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={miniLogo} alt="" />
      <Search />
      <div className="header__button">
        <Button buttonText="Add New Record" />
      </div>
    </header>
  );
}

export default Header;
