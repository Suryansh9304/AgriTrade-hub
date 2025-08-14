import React, { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userApiService } from "../../api/userApi";
import "../css/Farmer.css";

const FarmerRegistration = () => {
  const inputFirstNameRef = useRef(null);
  const inputLastNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const inputMobileRef = useRef(null);
  const checkBoxTermsRef = useRef(null);

  const errorFnameRef = useRef(null);
  const errorLnameRef = useRef(null);
  const errorEmailRef = useRef(null);
  const errorMobileRef = useRef(null);
  const errorPasswordRef = useRef(null);

  const [isError, setError] = useState({
    firstName: true,
    lastName: true,
    email: true,
    mobile: true,
    password: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (checkBoxTermsRef.current) {
      checkBoxTermsRef.current.checked = false;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // First Name
    if (inputFirstNameRef.current.value.trim() === "") {
      errorFnameRef.current.textContent = "First Name is Required";
      inputFirstNameRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, firstName: true }));
    } else {
      errorFnameRef.current.textContent = "";
      inputFirstNameRef.current.style.border = "";
      setError((prev) => ({ ...prev, firstName: false }));
    }

    // Last Name
    if (inputLastNameRef.current.value.trim() === "") {
      errorLnameRef.current.textContent = "Last Name is Required";
      inputLastNameRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, lastName: true }));
    } else {
      errorLnameRef.current.textContent = "";
      inputLastNameRef.current.style.border = "";
      setError((prev) => ({ ...prev, lastName: false }));
    }

    // Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputEmailRef.current.value.trim() === "") {
      errorEmailRef.current.textContent = "Email is Required";
      inputEmailRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, email: true }));
    } else if (!emailRegex.test(inputEmailRef.current.value.trim())) {
      errorEmailRef.current.textContent = "Enter a valid Email";
      inputEmailRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, email: true }));
    } else {
      errorEmailRef.current.textContent = "";
      inputEmailRef.current.style.border = "";
      setError((prev) => ({ ...prev, email: false }));
    }

    // Mobile
    const mobileRegex = /^[6-9]{1}[0-9]{9}$/;
    if (inputMobileRef.current.value.trim() === "") {
      errorMobileRef.current.textContent = "Mobile is Required";
      inputMobileRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, mobile: true }));
    } else if (!mobileRegex.test(inputMobileRef.current.value.trim())) {
      errorMobileRef.current.textContent = "Invalid Mobile No";
      inputMobileRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, mobile: true }));
    } else {
      errorMobileRef.current.textContent = "";
      inputMobileRef.current.style.border = "";
      setError((prev) => ({ ...prev, mobile: false }));
    }

    // Password
    if (inputPasswordRef.current.value.trim() === "") {
      errorPasswordRef.current.textContent = "Password is Required";
      inputPasswordRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, password: true }));
    } else {
      errorPasswordRef.current.textContent = "";
      inputPasswordRef.current.style.border = "";
      setError((prev) => ({ ...prev, password: false }));
    }

    // Terms checkbox
    if (checkBoxTermsRef.current.checked === false) {
      alert("Please Accept the Terms and conditions");
      return;
    }

    if (
      !isError.firstName &&
      !isError.lastName &&
      !isError.email &&
      !isError.mobile &&
      !isError.password
    ) {
      const farmerRegisterData = {
        name:
          inputFirstNameRef.current.value.trim() +
          " " +
          inputLastNameRef.current.value.trim(),
        email: inputEmailRef.current.value.trim(),
        mobile: inputMobileRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim(),
        role: "farmer",
      };

      userApiService.RegisterFarmer(farmerRegisterData);
      navigate("/farmer-dashboard");
    }
  }

  return (
    <div className="dashboard-gradient">
      <div className="farmer-form card-hover">
        <h1>Farmer Registration</h1>
        <form onSubmit={handleSubmit}>
          First Name:
          <input type="text" ref={inputFirstNameRef} />
          <span ref={errorFnameRef}></span>
          <br />
          Last Name:
          <input type="text" ref={inputLastNameRef} />
          <span ref={errorLnameRef}></span>
          <br />
          Email:
          <input type="email" ref={inputEmailRef} />
          <span ref={errorEmailRef}></span>
          <br />
          Mobile No:
          <input type="text" ref={inputMobileRef} />
          <span ref={errorMobileRef}></span>
          <br />
          Password:
          <input type="password" ref={inputPasswordRef} />
          <span ref={errorPasswordRef}></span>
          <br />
          <input type="checkbox" ref={checkBoxTermsRef} /> I Accept the{" "}
          <NavLink to="/terms-conditions">Terms and conditions</NavLink>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default FarmerRegistration;
