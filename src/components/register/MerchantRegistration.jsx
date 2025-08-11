import React from "react";

function MerchantRegistration() {
    return (
        <form>
            <h3 className="mb-4 text-center text-primary">Merchant Registration</h3>

            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" pattern="[0-9]{10}" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Type of Company</label>
                <select className="form-select" required>
                    <option value="">-- Select Type --</option>
                    <option value="proprietorship">Proprietorship</option>
                    <option value="llp">LLP</option>
                    <option value="private_limited">Private Limited</option>
                    <option value="public">Public</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Company Registration Number</label>
                <input type="text" className="form-control" required />
            </div>
        </form>
    );
}

export default MerchantRegistration;