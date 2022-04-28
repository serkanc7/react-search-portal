import React, { useState, useEffect } from "react";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { filterData } from "../../redux/searchSlice";

function Search({ setIsTwoLetters }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 2) {
      setIsTwoLetters(true);
    } else {
      setIsTwoLetters(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/list");
  };

  useEffect(() => {
    if (searchTerm) {
      dispatch(filterData(searchTerm));
    }
  }, [searchTerm]);

  return (
    <form className="search" onSubmit={handleSubmit} value={searchTerm}>
      <input
        type="text"
        className="search__input"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button buttonText="Search" />
    </form>
  );
}

export default Search;
