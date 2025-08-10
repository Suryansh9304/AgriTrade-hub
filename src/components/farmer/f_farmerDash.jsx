import React, { useState } from "react";
import Sidebar from "./f_sidebar";
import Dashboard from "./f_dashboard";
import Tasks from './f_tasks';
import Payments from './f_Payment';
import Notifications from './f_notification';
import ContactAdmin from './f_contactAdmin';
import Profile from './f_Profile';
import "../css/Farmer.css";

function FarmerDash() {
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
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <div className="col-md-2 sidebar-gradient p-0">
          <Sidebar setPage={setActivePage} />
        </div>

        {/* Main Content */}
        <div className="col-md-10 main-content overflow-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default FarmerDash;
