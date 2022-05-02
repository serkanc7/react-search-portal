import React,{useState,useEffect} from "react";
import "./ListItem.scss";
import locationLogo from "../../assets/img/location.svg";
import { useLocation} from "react-router-dom";

function ListItem({ record }) {

  const [urlPath, setUrlPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setUrlPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="list-item">
        <img className="list-item__logo" src={locationLogo} alt="location" />
        <div className="list-item__info">
          <p className="list-item__company">{record.company}</p>
          <div className="list-item__location">
            {record.city},{record.country}
          </div>
        </div>
        { urlPath === "/list" &&
        <div className="list-item__info-2">
          <div className="list-item__name">{record.name}</div>
          <div className="list-item__date">{record.date}</div>
        </div>
}
      </div>
      
      <hr className={urlPath === "/" ? 'list-item__home-hr list-item__hr' : "list-item__hr"}/>

    </>
  );
}

export default ListItem;
