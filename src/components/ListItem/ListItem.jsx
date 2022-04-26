import React from "react";
import "./ListItem.scss";
import locationLogo from "../../assets/img/location.svg";

function ListItem({ record }) {
  return (
    <div className="list-item">
      <img className="list-item__logo" src={locationLogo} alt="location" />
      <div className="list-item__info">
        <p className="list-item__name">{record.name}</p>
        <div className="list-item__location">
          {record.city},{record.company}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
