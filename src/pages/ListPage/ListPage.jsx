import React from "react";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import Results from "../../components/Results/Results";
import "./ListPage.scss";

function ListPage() {
  return (
    <div className="listpage">
      <Header/>
      <Results />     
    </div>
  );
}

export default ListPage;
