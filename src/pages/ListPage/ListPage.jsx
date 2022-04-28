import React from "react";
import Header from "../../components/Header/Header";
import Results from "../../components/Results/Results";
import "./ListPage.scss";

function ListPage({ setIsTwoLetters  }) {
  return (
    <div>
      <Header setIsTwoLetters={setIsTwoLetters}/>
      <Results />
    </div>
  );
}

export default ListPage;
