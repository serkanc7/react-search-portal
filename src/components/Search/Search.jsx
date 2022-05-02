import React, { useState, useEffect } from "react";
import "./Search.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  filterData,
  setIsTwoLetters,
  setSearchText,
} from "../../redux/searchSlice";

function Search({ className, SearchSvg }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchText);
  const [searchTerm, setSearchTerm] = useState(searchText);
  const [urlPath, setUrlPath] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 2) {
      dispatch(setIsTwoLetters(true));
    } else {
      dispatch(setIsTwoLetters(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(filterData(searchTerm));
      if (location.pathname === "/") {
        navigate("/list");
        dispatch(setSearchText(searchTerm));
      }
    }
  };

  useEffect(() => {
    setUrlPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (searchTerm && urlPath === "/") {
      dispatch(filterData(searchTerm));
      dispatch(setSearchText(searchTerm));
    }
  }, [searchTerm, urlPath, dispatch]);

  return (
    <form className="search" onSubmit={handleSubmit} value={searchTerm}>
      <div className={className}>
        <img className="search__svg" src={SearchSvg} alt="" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          required={true}
        />
      </div>
      <Button buttonText="Search" />
    </form>
  );
}

export default Search;
