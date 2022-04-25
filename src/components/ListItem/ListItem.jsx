import React from "react";
import "./ListItem.scss";

function ListItem({record}) {
  return (<div className="list-item">
      <p className="list-item__company">{record.name}</p>
      <div className="list-item__location">{record.city},{record.company}</div>
  </div>);
}

export default ListItem;
