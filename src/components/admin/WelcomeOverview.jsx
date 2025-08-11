import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import StatCard from "./StatCard";

const WelcomeOverview = ({ stats = {} }) => {
  // stats = { totalFarmers, totalMerchants, activeOrders, pendingPayments }
  const { totalFarmers = 0, totalMerchants = 0, activeOrders = 0, pendingPayments = 0 } = stats;

  return (
    <>
      <Row className="align-items-center mb-3">
        <Col xs={12} md={8}>
          <h3>Welcome back, Admin</h3>
          <p className="text-muted">Manage Farmers, Merchants, Orders, Payments and System health</p>
        </Col>
        <Col xs={12} md={4} className="text-md-end">
          <Image src="https://via.placeholder.com/80" roundedCircle alt="admin" />
        </Col>
      </Row>

      <Row>
        <Col md={3}><StatCard title="Total Farmers" value={totalFarmers} variant="success" /></Col>
        <Col md={3}><StatCard title="Total Merchants" value={totalMerchants} variant="info" /></Col>
        <Col md={3}><StatCard title="Active Orders" value={activeOrders} variant="warning" /></Col>
        <Col md={3}><StatCard title="Pending Payments" value={pendingPayments} variant="danger" /></Col>
      </Row>
    </>
  );
};

export default WelcomeOverview;
