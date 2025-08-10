import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { House, CreditCard, Bell, Envelope, Person, ClipboardCheck } from "react-bootstrap-icons";
import logo from "../../assets/logo.png";

function Sidebar({ setPage }) {
  return (
    <div>
        <h3 className="text-white">
      <img src={logo} alt="AgriTrade Logo" height="60" className="me-2"/> AgriTrade </h3>
      <h4 className="mb-4 text-center text-white"> Merchant </h4>
      <ListGroup variant="flush">
        <ListGroup.Item className="p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("dashboard")}>
            <House /> Dashboard
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("tasks")}>
            <ClipboardCheck /> Assigned Tasks
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("payments")}>
            <CreditCard /> Payment
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("notifications")}>
            <Bell /> Notifications
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("contact")}>
            <Envelope /> Contact Admin
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="p-0">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("profile")}>
            <Person /> Profile
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;