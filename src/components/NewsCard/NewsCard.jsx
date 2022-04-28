import React from "react";
import "./NewsCard.scss";
import newsPhoto from "../../assets/img/new.png";

function NewsCard({contWidth}) {

    

  return (
    <div className="news-card">
      <img style={{width: (contWidth-40)/3}} className="news-card__img" src={newsPhoto} alt="news" />
      <h3 className="news-card__title">
        A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
      </h3>
      <div className="news-card__footer">
        <span className="news-card__time">1h hour</span>{" "}
        <span className="news- card__author">by Troy Corlson</span>
      </div>
    </div>
  );
}

export default NewsCard;
