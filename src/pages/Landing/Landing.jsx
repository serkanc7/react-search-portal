import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Landing.scss";
import Logo from "../../assets/img/logo.png";
import Search from "../../components/Search/Search";
import ShortResults from "../../components/ShortResults/ShortResults";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";

function Landing({ records, setRecords }) {

  const [isTwoLetters, setIsTwoLetters] = useState(false);

  return (
    <main className="landing">
      <div className="landing__button container">
        <Button buttonText="Add new record" />
      </div>
      <div className="landing__container contaimer">
        <div className="landing__logo">
          <img className="landing__logo-img" src={Logo} alt="logo" />
          <div className="landing__logo-text">Search app</div>
        </div>
        <h1 className="landing__title">Find in records</h1>
        <Search setRecords={setRecords} setIsTwoLetters={setIsTwoLetters} />
        {isTwoLetters && records.length > 0 && <ShortResults records={records}/>}
      </div>
      <News />
      <Footer/>
    </main>
  );
}

export default Landing;
