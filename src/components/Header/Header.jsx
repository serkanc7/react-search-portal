import React from "react";
import { Link } from "react-router-dom";
import miniLogo from "../../assets/img/mini-logo.jpg";
import Button from "../Button/Button";
import Search from "../Search/Search";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={miniLogo} alt="" />
      </Link>

      <Search className="search__input-list" />
      <div className="header__button">
        <Button buttonText="Add New Record" />
      </div>
    </header>
  );
}

export default Header;
