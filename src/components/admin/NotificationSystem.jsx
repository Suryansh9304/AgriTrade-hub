import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

/*
Replace handleSend to call backend notification endpoints:
- Send email: /api/notify/email
- Send sms: /api/notify/sms
- In-app: create notification record
*/

const NotificationSystem = () => {
  const [target, setTarget] = useState("all");
  const [method, setMethod] = useState("in-app");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return alert("Please write a message.");
    alert(`Send "${message}" to ${target} via ${method} (implement API)`);
    setMessage("");
  };

  return (
    <Card className="mb-3">
      <Card.Header>Notification System</Card.Header>
      <Card.Body>
        <Form.Group className="mb-2">
          <Form.Label>Target</Form.Label>
          <Form.Select value={target} onChange={e => setTarget(e.target.value)}>
            <option value="all">All users</option>
            <option value="farmers">Only farmers</option>
            <option value="merchants">Only merchants</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Delivery method</Form.Label>
          <Form.Select value={method} onChange={e => setMethod(e.target.value)}>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="in-app">In-app</option>
          </Form.Select>
        </Form.Group>

        <Form.Control as="textarea" rows={3} placeholder="Write announcement..." value={message} onChange={e => setMessage(e.target.value)} className="mb-2" />

        <Button onClick={handleSend}>Send Announcement</Button>
      </Card.Body>
    </Card>
  );
};

export default NotificationSystem;
