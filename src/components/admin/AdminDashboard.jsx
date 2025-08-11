import React from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import WelcomeOverview from "./WelcomeOverview";
import UserManagement from "./UserManagement";
import OrderManagement from "./OrderManagement";
import PaymentsOverview from "./PaymentsOverview";
import ReportsAnalytics from "./ReportsAnalytics";
import NotificationSystem from "./NotificationSystem";
import SystemHealth from "./SystemHealth";
import StatCard from "./StatCard";
import "../css/Admin.css"

const AdminDashboard = () => {
  // summary stats should come from backend
  const stats = { totalFarmers: 300, totalMerchants: 150, activeOrders: 25, pendingPayments: 6 };

  return (
    <div className="dashboard-gradient">
    <Container fluid className="p-4">
      <WelcomeOverview stats={stats} />

      
      <Tab.Container defaultActiveKey="users">
        <Row className="mt-3">
          <Col md={2} className="sidebar-nav">
            <Nav variant="pills" className="flex-column">
              <Nav.Item><Nav.Link eventKey="users">Users</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="orders">Orders</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="payments">Payments</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="reports">Reports</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="notify">Notifications</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="health">System Health</Nav.Link></Nav.Item>
            </Nav>
          </Col>

          <Col md={10}>
            <Tab.Content>
              <Tab.Pane eventKey="users"><UserManagement /></Tab.Pane>
              <Tab.Pane eventKey="orders"><OrderManagement /></Tab.Pane>
              <Tab.Pane eventKey="payments"><PaymentsOverview /></Tab.Pane>
              <Tab.Pane eventKey="reports"><ReportsAnalytics /></Tab.Pane>
              <Tab.Pane eventKey="notify"><NotificationSystem /></Tab.Pane>
              <Tab.Pane eventKey="health"><SystemHealth /></Tab.Pane>
              <Tab.Pane eventKey="statcard"><StatCard /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
    </div>
  );
};

export default AdminDashboard;
