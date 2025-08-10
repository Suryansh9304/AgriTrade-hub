import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Image, Badge, Alert } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [profile, setProfile] = useState({
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    address: "123 Business Street, Commercial Area, New Delhi, Delhi - 110001",
    businessName: "Kumar Agro Traders",
    businessType: "Wholesale Trader",
    gstNumber: "GST123456789",
    panNumber: "ABCDE1234F",
    bankName: "State Bank of India",
    accountNumber: "1234567890",
    ifscCode: "SBIN0001234",
    registrationDate: "2020-03-15",
    totalOrders: 156,
    totalSpent: "₹8,45,000",
    rating: 4.8,
    verified: true
  });

  const [editProfile, setEditProfile] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="merchant-page">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">👤 Merchant Profile</h4>
        
        {showSuccess && (
          <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
            Profile updated successfully!
          </Alert>
        )}

        {/* Profile Header */}
        <Card className="border-0 shadow-sm mb-4 merchant-stats-card">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={3} className="text-center">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                  roundedCircle
                  width={120}
                  height={120}
                  className="mb-3"
                />
                <div>
                  <Button 
                    variant="outline-light" 
                    size="sm" 
                    className="w-100 mb-2"
                  >
                    📷 Change Photo
                  </Button>
                </div>
              </Col>
              <Col md={9}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="text-white mb-2">{profile.name}</h3>
                    <p className="text-white mb-2">{profile.businessName}</p>
                    <p className="text-white mb-3">{profile.businessType}</p>
                    <div className="d-flex gap-3 mb-3">
                      <Badge bg="success" className="fs-6">
                        ⭐ {profile.rating} Rating
                      </Badge>
                      {profile.verified && (
                        <Badge bg="primary" className="fs-6">
                          ✅ Verified Merchant
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-end">
                    <Button 
                      variant={isEditing ? "outline-warning" : "outline-light"}
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? "✏️ Cancel Edit" : "✏️ Edit Profile"}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Profile Details */}
        <Row className="g-4">
          {/* Personal Information */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Header className="bg-transparent">
                <h5 className="mb-0">Personal Information</h5>
              </Card.Header>
              <Card.Body>
                {isEditing ? (
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={editProfile.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={editProfile.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={editProfile.phone}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="address"
                        value={editProfile.address}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form>
                ) : (
                  <div>
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Phone:</strong> {profile.phone}</p>
                    <p><strong>Address:</strong> {profile.address}</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Business Information */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Header className="bg-transparent">
                <h5 className="mb-0">Business Information</h5>
              </Card.Header>
              <Card.Body>
                {isEditing ? (
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="businessName"
                        value={editProfile.businessName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Business Type</Form.Label>
                      <Form.Control
                        type="text"
                        name="businessType"
                        value={editProfile.businessType}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>GST Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="gstNumber"
                        value={editProfile.gstNumber}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>PAN Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="panNumber"
                        value={editProfile.panNumber}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form>
                ) : (
                  <div>
                    <p><strong>Business Name:</strong> {profile.businessName}</p>
                    <p><strong>Business Type:</strong> {profile.businessType}</p>
                    <p><strong>GST Number:</strong> {profile.gstNumber}</p>
                    <p><strong>PAN Number:</strong> {profile.panNumber}</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Banking Information */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Header className="bg-transparent">
                <h5 className="mb-0">Banking Information</h5>
              </Card.Header>
              <Card.Body>
                {isEditing ? (
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Bank Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="bankName"
                        value={editProfile.bankName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Account Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="accountNumber"
                        value={editProfile.accountNumber}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>IFSC Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="ifscCode"
                        value={editProfile.ifscCode}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form>
                ) : (
                  <div>
                    <p><strong>Bank Name:</strong> {profile.bankName}</p>
                    <p><strong>Account Number:</strong> {profile.accountNumber}</p>
                    <p><strong>IFSC Code:</strong> {profile.ifscCode}</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Statistics */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Header className="bg-transparent">
                <h5 className="mb-0">Account Statistics</h5>
              </Card.Header>
              <Card.Body>
                <div className="text-center">
                  <Row className="g-3">
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <h4 className="text-primary mb-1">{profile.totalOrders}</h4>
                        <small className="text-muted">Total Orders</small>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <h4 className="text-success mb-1">{profile.totalSpent}</h4>
                        <small className="text-muted">Total Spent</small>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <h4 className="text-info mb-1">{profile.rating}</h4>
                        <small className="text-muted">Rating</small>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <h4 className="text-warning mb-1">{profile.registrationDate}</h4>
                        <small className="text-muted">Member Since</small>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Action Buttons */}
        {isEditing && (
          <div className="text-center mt-4">
            <Button variant="success" className="me-3" onClick={handleSave}>
              💾 Save Changes
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              ❌ Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MerchantProfile;
