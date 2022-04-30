import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./Results.scss";
import { useSelector } from "react-redux";

function Results() {
  const records = useSelector((state) => state.search.data);
  const [categoryOpened, setCategoryOpened] = useState(false);

  return (
    <div className="results">
      <div className="results__items">
        {records.map((record) => (
          <ListItem record={record} key={record.id} />
        ))}
      </div>
      <div className="order">
        <button
          className="order__title"
          onClick={() => setCategoryOpened((prevShow) => !prevShow)}
        >
          &#8595;&#8593; Order By
        </button>
        {categoryOpened && (
          <div
            className={
              categoryOpened ? "order__categories active" : "order__categories"
            }
          >
            <button className="order__name-asc order__button">
              Name ascending
            </button>
            <button className="order__name-desc order__button">
              Name descending
            </button>
            <button className="order__year-asc order__button">
              Year ascending
            </button>
            <button className="order__year-desc order__button">
              Year descending
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;
