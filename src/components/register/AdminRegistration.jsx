import React from "react";

function AdminRegistration() {
    return (
        <form>
            <h3>Admin Registration</h3>
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
            <div className="mb-3">
                <label className="form-label">Admin Code</label>
                <input type="text" className="form-control" required />
            </div>
            {/* Add more admin-specific fields here */}
        </form>
    );
}

export default AdminRegistration;