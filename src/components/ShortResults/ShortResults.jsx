import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";
import "./ShortResults.scss";

function ShortResults() {

  const records = useSelector(state => state.search.data);

  return (
    <div className="short-results">
      {records.map((record,index) => (
        index < 3 && < ListItem record={record} key={record.id} />
      ))}
      {records.length > 3 && <Link to="/list" className="short-results__link">Show more...</Link>}

    </div>
  );
}

export default ShortResults;
