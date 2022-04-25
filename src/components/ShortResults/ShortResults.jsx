import React from "react";
import ListItem from "../ListItem/ListItem";
import "./ShortResults.scss";

function ShortResults({ records }) {
  return (
    <div className="short-results">
      {records.map((record) => (
        <ListItem record={record} key={record.id} />
      ))}
    </div>
  );
}

export default ShortResults;
