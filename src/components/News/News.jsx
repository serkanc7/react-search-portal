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

  const scroll = (offset) => {
    ref.current.scrollLeft += offset;
  }


  return (
    <div className="news container">
      <h2 className="news__title">Top News</h2>
      <div className="news__slider">
        <button className="news__btn news__btn-prev" onClick={() => scroll(-contWidth/3 - 20)} >
          <img src={prevBtn} alt=""/>
        </button>
        <div ref={ref} className="news__container">
          {[0,1,2,3].map((item) => (<NewsCard key={item} padding contWidth={contWidth}/>))}
        </div>
        <button className="news__btn news__btn-next" onClick={() => scroll(contWidth/3 + 20)}>
          <img src={nextBtn} alt="" />
        </button>
      </div>
    </div>
  );
}

export default News;
