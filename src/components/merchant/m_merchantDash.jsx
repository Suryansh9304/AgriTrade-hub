import React, { useState } from "react";
import Sidebar from "./m_sidebar";
import Dashboard from "./m_dashboard";
import Tasks from './m_tasks';
import Payments from './m_payments';
import Notifications from './m_notifications';
import ContactAdmin from './m_contact_admin';
import Profile from './m_profile';
import "../css/Merchant.css";

function MerchantDash() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "tasks":
        return <Tasks />;
      case "payments":
        return <Payments />;
      case "notifications":
        return <Notifications />;
      case "contact":
        return <ContactAdmin />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <div
        className="col-md-2 p-0"
        style={{
          background: "linear-gradient(to right, rgb(16, 186, 149), rgb(140, 190, 54))",
          minHeight: "100vh",
        }}
      >
        <Sidebar setPage={setActivePage} />
      </div>

      {/* Main Content */}
      <div
        className="col-md-10 overflow-auto"
        style={{
          background: "#f9f9f9",
          padding: "20px",
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default MerchantDash;
