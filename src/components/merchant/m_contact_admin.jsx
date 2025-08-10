import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert, ListGroup, Badge } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantContactAdmin() {
  const [formData, setFormData] = useState({
    subject: '',
    category: 'General',
    priority: 'Medium',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: "Payment Issue",
      category: "Payment",
      priority: "High",
      status: "Open",
      message: "Unable to process payment for order #123",
      adminResponse: "",
      date: "2024-01-15"
    },
    {
      id: 2,
      subject: "Order Delivery",
      category: "Order",
      priority: "Medium",
      status: "In Progress",
      message: "Order #124 delivery delayed",
      adminResponse: "We're investigating the delay. Will update you soon.",
      date: "2024-01-14"
    },
    {
      id: 3,
      subject: "Account Verification",
      category: "Account",
      priority: "Low",
      status: "Resolved",
      message: "Need help with account verification",
      adminResponse: "Your account has been verified successfully.",
      date: "2024-01-13"
    }
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: tickets.length + 1,
      ...formData,
      status: 'Open',
      adminResponse: '',
      date: new Date().toISOString().split('T')[0]
    };
    setTickets([newTicket, ...tickets]);
    setFormData({
      subject: '',
      category: 'General',
      priority: 'Medium',
      message: ''
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getPriorityBadge = (priority) => {
    const variants = {
      'High': 'danger',
      'Medium': 'warning',
      'Low': 'info'
    };
    return <Badge bg={variants[priority] || 'secondary'}>{priority}</Badge>;
  };

  const getStatusBadge = (status) => {
    const variants = {
      'Open': 'warning',
      'In Progress': 'info',
      'Resolved': 'success',
      'Closed': 'secondary'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Payment': '💳',
      'Order': '📦',
      'Account': '👤',
      'General': '❓'
    };
    return icons[category] || '❓';
  };

  const openTickets = tickets.filter(t => t.status === 'Open').length;
  const inProgressTickets = tickets.filter(t => t.status === 'In Progress').length;
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved').length;

  return (
    <div className="merchant-page">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">📞 Contact Admin</h4>
        
        {showSuccess && (
          <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
            Support ticket created successfully!
          </Alert>
        )}

        {/* Ticket Statistics */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-center card-hover shadow-sm border-0">
              <Card.Body>
                <h3 className="text-warning">{openTickets}</h3>
                <p className="mb-0">Open Tickets</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center card-hover shadow-sm border-0">
              <Card.Body>
                <h3 className="text-info">{inProgressTickets}</h3>
                <p className="mb-0">In Progress</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center card-hover shadow-sm border-0">
              <Card.Body>
                <h3 className="text-success">{resolvedTickets}</h3>
                <p className="mb-0">Resolved</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center card-hover shadow-sm border-0">
              <Card.Body>
                <h3 className="text-primary">{tickets.length}</h3>
                <p className="mb-0">Total Tickets</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Create New Ticket */}
          <Col md={6}>
            <Card className="card-hover shadow-sm border-0">
              <Card.Header>
                <h5 className="mb-0">Create Support Ticket</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                        >
                          <option value="General">General</option>
                          <option value="Payment">Payment</option>
                          <option value="Order">Order</option>
                          <option value="Account">Account</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Priority</Form.Label>
                        <Form.Select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Submit Ticket
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Ticket History */}
          <Col md={6}>
            <Card className="card-hover shadow-sm border-0">
              <Card.Header>
                <h5 className="mb-0">Recent Tickets</h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {tickets.slice(0, 5).map(ticket => (
                    <ListGroup.Item key={ticket.id} className="px-0">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <strong>{ticket.subject}</strong>
                          <div className="text-muted small">
                            {getCategoryIcon(ticket.category)} {ticket.category} • {ticket.date}
                          </div>
                        </div>
                        <div className="text-end">
                          {getPriorityBadge(ticket.priority)}
                          <br />
                          {getStatusBadge(ticket.status)}
                        </div>
                      </div>
                      <p className="mb-2 small">{ticket.message}</p>
                      {ticket.adminResponse && (
                        <div className="bg-light p-2 rounded">
                          <small className="text-muted">
                            <strong>Admin Response:</strong> {ticket.adminResponse}
                          </small>
                        </div>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Information */}
        <Card className="mt-4 card-hover shadow-sm border-0">
          <Card.Header>
            <h5 className="mb-0">📞 Contact Information</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <h6>📧 Email Support</h6>
                <p className="mb-1">support@agritradehub.com</p>
                <small className="text-muted">Response within 24 hours</small>
              </Col>
              <Col md={4}>
                <h6>📱 Phone Support</h6>
                <p className="mb-1">+91 98765 43210</p>
                <small className="text-muted">Mon-Fri, 9 AM - 6 PM</small>
              </Col>
              <Col md={4}>
                <h6>💬 Live Chat</h6>
                <p className="mb-1">Available on website</p>
                <small className="text-muted">Real-time support</small>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MerchantContactAdmin;



