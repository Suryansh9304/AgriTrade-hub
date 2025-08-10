import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import "../css/Farmer.css";

function ContactAdmin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you would typically send the data to the backend
    console.log('Contact Form Submitted:', formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Card className="shadow-sm border-0 mt-3 contact-admin-card">
      <Card.Header className="bg-success text-white">
        <h5 className="mb-0">Contact Admin</h5>
      </Card.Header>

      <Card.Body >
        {submitted && (
          <Alert variant="success">
            Message sent successfully!
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Type your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
    
  );
}

export default ContactAdmin;