import React, { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

const ReportsAnalytics = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <Card>
      <Card.Header>Reports & Analytics</Card.Header>
      <Card.Body>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Control
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col md={6}>
            <h6>Top-performing users (mock)</h6>
            <ul>
              <li>Farmer John - 20 orders</li>
              <li>Merchant Mike - 18 orders</li>
            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ReportsAnalytics;