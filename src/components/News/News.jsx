import React, { useEffect,useState, useRef } from "react";
import "./News.scss";
import nextBtn from "../../assets/img/right-button.svg";
import prevBtn from "../../assets/img/left-button.svg";
import NewsCard from "../NewsCard/NewsCard";

function News() {

  const ref = useRef(null);
  const [contWidth,setContWidth] = useState(0);


  const getWidth = () => {
    const newWidth = ref.current.clientWidth;
    console.log(newWidth);
    setContWidth(newWidth);
  };

  useEffect(() => {
    getWidth();
    window.addEventListener("load",getWidth);
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("load",getWidth);
      window.removeEventListener("resize",getWidth);
    };

  }, []);

 




  return (
    <div className="news">
      <h2 className="news__title">Top News</h2>
      <div className="news__slider">
        <button className="news__btn news__btn-prev">
          <img src={prevBtn} alt="" />
        </button>
        <div ref={ref} className="news__container">
          <NewsCard contWidth={contWidth}/>
          <NewsCard contWidth={contWidth}/>
          <NewsCard contWidth={contWidth}/>
          <NewsCard contWidth={contWidth}/>
        </div>
        <button className="news__btn news__btn-next">
          <img src={nextBtn} alt="" />
        </button>
      </div>
    </div>
  );
}

export default News;
