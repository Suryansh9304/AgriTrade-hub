import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Farmer.css";

function FarmerDash() {
  const [activePage, setActivePage] = useState("profile");
  const [sessionData, setSessionData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = window.localStorage.getItem("session.data");

    if (!storedData) {
      navigate("/login?msg=Session-Expired");
    } else {
      setSessionData(JSON.parse(storedData));
    }
  }, [navigate]);

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  const renderPage = () => {
    switch (activePage) {
      case "profile":
        return <div>Profile Page</div>;
      case "manage-products":
        return <div>Manage Products Page</div>;
      case "quotations":
        return <div>Quotations Page</div>;
      case "sampling-management":
        return <div>Sampling Management Page</div>;
      case "order-management":
        return <div>Order Management Page</div>;
      default:
        return <div>Welcome to Dashboard</div>;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        
        {/* Sidebar */}
        <div className="col-md-2 sidebar-gradient p-0">
          <div className="dashboard-sidebar p-3">
            <h4 className="sidebar-title">Dashboard</h4>
            <nav className="d-flex flex-column">
              <button className="btn btn-link text-start" onClick={() => setActivePage("profile")}>
                Profile
              </button>
              <button className="btn btn-link text-start" onClick={() => setActivePage("manage-products")}>
                Manage Products
              </button>
              <button className="btn btn-link text-start" onClick={() => setActivePage("quotations")}>
                Quotations
              </button>
              <button className="btn btn-link text-start" onClick={() => setActivePage("sampling-management")}>
                Sampling Management
              </button>
              <button className="btn btn-link text-start" onClick={() => setActivePage("order-management")}>
                Order Management
              </button>

              <div className="mt-4">
                {sessionData?.name || ""}  
                <br />
                <b>{sessionData?.email || ""}</b>
              </div>

              <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 main-content overflow-auto p-3">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default FarmerDash;
