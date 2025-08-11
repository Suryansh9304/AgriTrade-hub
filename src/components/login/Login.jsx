import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Farmer.css"

function Login() {
    const navigate = useNavigate();

    const [userType, setUserType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Redirect based on user type
        if (userType === "farmer") {
            navigate("/farmer-dashboard");
        } else if (userType === "merchant") {
            navigate("/merchant-dashboard");
        } else if (userType === "admin") {
            navigate("/admin-dashboard");
        } else {
            alert("Please select a valid user type.");
        }
    };

    return (
        <React.Fragment>
             <div className="farmer-page">
            <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 bg-white p-4 shadow rounded">
                    <h2 className="text-center text-success mb-4">AgriTrade Hub Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" pattern="[0-9]{10}" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input type="number" className="form-control" min="18" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Verification Code</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">User Type</label>
                            <select
                                className="form-select"
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                required
                            >
                                <option value="">-- Select User Type --</option>
                                <option value="farmer">Farmer</option>
                                <option value="merchant">Merchant</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Login</button>

                          <button
                          type="button"
                          className="btn btn-success w-100 mt-3"
                          onClick={() => navigate("/register")}>Register</button>
                    </form>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
