import React from "react";
import ListItem from "../ListItem/ListItem";
import "./Results.scss";
import {useSelector} from 'react-redux';

function Results() {

  const records = useSelector(state => state.search.data);

  return (
    <div>
      {records.map(
        (record) =>
          <ListItem record={record} key={record.id} />
      )}
    </div>
  );
}

export default Results;
