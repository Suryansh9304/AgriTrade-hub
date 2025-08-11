import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Farmer.css";
import FarmerRegistration from "./FarmerRegistration";
import MerchantRegistration from "./MerchantRegistration";
import AdminRegistration from "./AdminRegistration";

function Register() {
    const navigate = useNavigate();
    const [userType, setUserType] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
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

    const renderUserForm = () => {
        if (userType === "farmer") return <FarmerRegistration />;
        if (userType === "merchant") return <MerchantRegistration />;
        if (userType === "admin") return <AdminRegistration />;
        return null;
    };

    return (
        <React.Fragment>
            <div className="farmer-page">
                <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
                    <div className="col-md-6 bg-white p-4 shadow rounded">
                        <h2 className="text-center text-success mb-4">AgriTrade Hub Registration</h2>
                        <form onSubmit={handleRegister}>
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

                            {/* Common Fields */}
                            
                            {/* Role-Specific Form */}
                            {renderUserForm()}

                            <button type="submit" className="btn btn-success w-100 mt-3">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;