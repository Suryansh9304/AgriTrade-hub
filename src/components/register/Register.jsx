import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Register.css"; // custom CSS

function Register() {
  return (
    <React.Fragment>
      <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-4 text-center p-4 register-card">
              <h4 className="mb-3 text-success">Farmer Registration</h4>
              <p className="text-muted">
                Register as a farmer to manage produce, connect with merchants, and track sales.
              </p>
              <a href="/farmerreg" className="btn btn-success w-100 fw-bold">
                Register as Farmer
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-4 text-center p-4 register-card">
              <h4 className="mb-3 text-success">Merchant Registration</h4>
              <p className="text-muted">
                Register as a merchant to buy from farmers, manage orders, and grow your business.
              </p>
              <a href="/merchantreg" className="btn btn-success w-100 fw-bold">
                Register as Merchant
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
