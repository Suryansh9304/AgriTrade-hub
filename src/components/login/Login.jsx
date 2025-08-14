import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import agritradeLogo from "../../assets/images/Agri.jpg";
import { userApiService } from "../../api/userApi";

const Login = () => {
  const navigate = useNavigate();

  // Input refs
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  // Error refs
  const errorEmail = useRef(null);
  const errorPassword = useRef(null);

  const [isError, setError] = useState({
    email: true,
    password: true,
  });

  function handleLoginSubmit(e) {
    e.preventDefault();

    // Email validation
    if (inputEmailRef.current.value.trim() === "") {
      errorEmail.current.textContent = "Email is Required";
      errorEmail.current.style.color = "red";
      inputEmailRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, email: true }));
    } else {
      errorEmail.current.textContent = "";
      inputEmailRef.current.style.border = "";
      setError((prev) => ({ ...prev, email: false }));
    }

    // Password validation
    if (inputPasswordRef.current.value.trim() === "") {
      errorPassword.current.textContent = "Password is Required";
      errorPassword.current.style.color = "red";
      inputPasswordRef.current.style.border = "2px solid red";
      setError((prev) => ({ ...prev, password: true }));
    } else {
      errorPassword.current.textContent = "";
      inputPasswordRef.current.style.border = "";
      setError((prev) => ({ ...prev, password: false }));
    }

    // If no errors
    if (!isError.email && !isError.password) {
      const credentials = {
        email: inputEmailRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim(),
      };

      userApiService.loginFarmer(credentials, function (data) {
        if (data.length > 0 && data.length === 1) {
          const role = data[0].role;
          const session_data = {
            id: data[0]?.id,
            name: data[0]?.name,
            email: data[0]?.email,
            role: role,
          };
          localStorage.setItem("session.data", JSON.stringify(session_data));

          if (role === "farmer") {
            navigate("/farmer-dashboard");
          } else if (role === "merchant") {
            navigate("/merchant-dashboard");
          } else if (role === "admin") {
            navigate("/admin-dashboard");
          }
        } else {
          alert("Invalid Login Credentials");
        }
      });
    }
  }

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5 bg-white p-4 shadow rounded">
        <div className="text-center mb-4">
          <img src={agritradeLogo} alt="AgriTrade Logo" style={{ height: "60px" }} />
          <h2 className="mt-3 text-success">AgriTrade Hub Login</h2>
        </div>

        <form onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" ref={inputEmailRef} />
            <small ref={errorEmail}></small>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={inputPasswordRef} />
            <small ref={errorPassword}></small>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>

          <button
            type="button"
            className="btn btn-outline-success w-100 mt-3"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
