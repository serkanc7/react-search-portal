import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./Results.scss";
import { useSelector, useDispatch } from "react-redux";
import { sortData } from "../../redux/searchSlice";
import Pagination from "../Pagination/Pagination";

function Results() {
  const records = useSelector((state) => state.search.data);
  const currentPage = useSelector((state) => state.search.currentPage);
  const dispatch = useDispatch();
  const [categoryOpened, setCategoryOpened] = useState(false);
  const recordsPerPage = 5;

  const indexOfLastRecord = currentPage  * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord,indexOfLastRecord);
  const totalPagesNum = Math.ceil(records.length/recordsPerPage);

  return (
    <div className="results">
      <div className="results__items">
        {currentRecords.map((record) => (
          <ListItem record={record} key={record.id} />
        ))}
        <Pagination pages={totalPagesNum}/>
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
            <button
              className="order__name-asc order__button"
              onClick={() => dispatch(sortData("asc"))}
            >
              Name ascending
            </button>
            <button
              className="order__name-desc order__button"
              onClick={() => dispatch(sortData("desc"))}
            >
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
