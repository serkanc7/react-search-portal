import React, { useEffect, useState } from "react";
import "./AddPage.scss";
import miniLogo from "../../assets/img/mini-logo.jpg";
import leftArrow from "../../assets/img/left-arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/searchSlice";
import Modal from "../../components/Modal/Modal";

function AddPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [err, setErr] = useState("");
  const [values, setValues] = useState({
    id: "",
    name: "",
    company: "Company",
    email: "",
    date: "02/05/2022",
    country: "",
    city: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter name and surname",
      errorMessage:
        "Name and surname should be 4-60 characters and shouldn't include any special character!",
      label: "Name Surname",
      pattern: "^[A-Za-z0-9]{4,60}$",
      required: true,
    },
    {
      id: 2,
      name: "country",
      type: "text",
      placeholder: "Enter a country",
      errorMessage:
        "Country should be 2-40 characters and shouldn't include any special character!",
      label: "Country",
      pattern: "^[A-Za-z0-9]{2,40}$",
      required: true,
    },
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: "Enter a city",
      errorMessage:
        "City should be 2-40 characters and shouldn't include any special character!",
      label: "City",
      pattern: "^[A-Za-z0-9]{2,40}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Enter a e-mail (abc@xyz.com)",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(values));
    navigate("/list");
  };

  const showModal = () => {
    setModal(true);
  };


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    if (values.name.length < 4 || values.name.length > 60) {
      setErr(inputs[0].errorMessage);
    } else if (values.country.length < 2 || values.country.length > 40) {
      setErr(inputs[1].errorMessage);
    } else if (values.city.length < 2 || values.city.length > 40) {
      setErr(inputs[2].errorMessage);
    } else if (!values.email.includes("@")) {
      setErr(inputs[3].errorMessage);
    }
  }, [values])
  


  return (
    <main className="addpage">
      <img className="addpage__logo" src={miniLogo} alt="logo" />
      <div className="addpage__container">
        <Link to="/list" className="addpage__link">
          <img src={leftArrow} alt="left arrow" />{" "}
          <h2 className="addpage__title">Return to List Page</h2>
        </Link>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="addpage__button">
            <Button buttonText="Add" showModal={showModal} />
          </div>
        </form>
      </div>
      {modal && <Modal setModal={setModal} err={err} />}
    </main>
  );
}

export default AddPage;
