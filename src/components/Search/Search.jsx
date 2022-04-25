import React, { useState, useEffect } from "react";
import "./Search.scss";
import mockData from "../../assets/json/mockData.json";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Search({ setRecords }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const data = mockData.data.map((item, i) => {
    return {
      id: i + 1,
      name: item[0],
      company: item[1],
      email: item[2],
      date: item[3],
      city: item[4],
    };
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    navigate("/list");
  };

  useEffect(() => {
    if (searchTerm) {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRecords(filteredData);
    } else {
      setRecords([]);
    }
  }, [searchTerm]);

  return (
    <form className="search" onSubmit={handleSubmit}>
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
