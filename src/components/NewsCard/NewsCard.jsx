import React from "react";
import "./NewsCard.scss";
import newsPhoto from "../../assets/img/new.png";

function NewsCard({contWidth,author,time,title}) {

    

  return (
    <div className="news-card">
      <img style={{width: (contWidth-40)/3}} className="news-card__img" src={newsPhoto} alt="news" />
      <h3 className="news-card__title">
        {title}
      </h3>
      <div className="news-card__footer">
        <span className="news-card__time">{time}h ago</span>{" "}
        <span className="news- card__author">by {author}</span>
      </div>
    </div>
  );
}

export default NewsCard;
