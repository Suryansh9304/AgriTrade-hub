import React, { useState, useEffect } from "react";
import { Card, Table, Button, Form, Row, Col } from "react-bootstrap";

/* Mock orders - replace with API */
const mockOrders = [
  { id: "ORD1001", farmer: "John Farmer", merchant: "Mike Merchant", status: "Pending", payment: "Paid" },
  { id: "ORD1002", farmer: "Rita Farm", merchant: "Shop Sara", status: "In Transit", payment: "Pending" },
  { id: "ORD1003", farmer: "Alpha", merchant: "Beta", status: "Delivered", payment: "Paid" }
];

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");

  useEffect(() => {
    // TODO: replace with API fetch
    setOrders(mockOrders);
  }, []);

  const filtered = orders.filter(o => {
    return (statusFilter === "All" || o.status === statusFilter) &&
           (paymentFilter === "All" || o.payment === paymentFilter);
  });

  const takeAction = (id, act) => {
    alert(`${act} order ${id} (implement API)`);
    // Example local update
    if (act === "Cancel") setOrders(orders.map(o => o.id === id ? {...o, status: "Cancelled"} : o));
  };

  return (
    <Card>
      <Card.Header>Order Management</Card.Header>
      <Card.Body>
        <Row className="mb-2">
          <Col md={4}>
            <Form.Select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option>All</option>
              <option>Pending</option>
              <option>In Transit</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select value={paymentFilter} onChange={e => setPaymentFilter(e.target.value)}>
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </Form.Select>
          </Col>
        </Row>

        <Table size="sm" striped bordered responsive>
          <thead>
            <tr>
              <th>Order</th><th>Farmer</th><th>Merchant</th><th>Status</th><th>Payment</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.farmer}</td>
                <td>{o.merchant}</td>
                <td>{o.status}</td>
                <td>{o.payment}</td>
                <td>
                  <Button size="sm" variant="info" onClick={() => alert(`View ${o.id}`)}>View</Button>{" "}
                  <Button size="sm" variant="danger" onClick={() => takeAction(o.id,"Cancel")}>Cancel</Button>{" "}
                  <Button size="sm" variant="secondary" onClick={() => alert(`Open dispute for ${o.id}`)}>Dispute</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default OrderManagement;
