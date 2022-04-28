import React from "react";
import miniLogo from "../../assets/img/mini-logo.jpg";
import Search from "../Search/Search";

function Header({setIsTwoLetters}) {
  return (
    <header className="header">
      <img src={miniLogo} alt="" />
        <Search setIsTwoLetters={setIsTwoLetters}/>
    </header>
  );
}

export default Header;
