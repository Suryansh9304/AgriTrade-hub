import React from 'react';
import { Card, Row, Col, Button, Image, Badge, ProgressBar } from 'react-bootstrap';
import "../css/Farmer.css"; // Make sure the path matches your project

function Profile() {
  const farmer = {
    name: "Akshit Daharwal",
    gender: "Male",
    dob: "15 August 1998",
    aadhaar: "XXXX-XXXX-1234",
    phone: "9876543210",
    email: "akshit@example.com",
    location: "Rajasthan, India",
    address: "Village Rewari, Tehsil Behror, District Alwar, Rajasthan, 301701",
    crops: 12,
    tasks: 8,
    payments: 6,
    memberSince: "March 2022",
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
    bank: {
      accountNumber: "XXXXXX1234",
      ifsc: "SBIN0000123",
      bankName: "State Bank of India"
    },
    profileCompletion: 85
  };

  return (
    <div className="farmer-page">
      <div className="mt-4 px-3">
        <h4 className="mb-4 text-success">👤 Farmer Profile</h4>

        <Card className="p-4 shadow border-0 mb-4">
          <Row className="align-items-center">
            <Col md={3} className="text-center mb-3">
              <Image
                src={farmer.avatar}
                roundedCircle
                width={120}
                height={120}
                className="shadow-sm"
              />
              <h5 className="mt-3">{farmer.name}</h5>
              <Badge bg="success" className="mt-2">Verified Farmer</Badge>
              <p className="text-muted mt-2">Member Since: {farmer.memberSince}</p>
            </Col>

            <Col md={5}>
              <h6 className="text-muted">Contact Details</h6>
              <p><strong>Phone:</strong> {farmer.phone}</p>
              <p><strong>Email:</strong> {farmer.email}</p>
              <p><strong>Gender:</strong> {farmer.gender}</p>
              <p><strong>Date of Birth:</strong> {farmer.dob}</p>
              <p><strong>Aadhaar:</strong> {farmer.aadhaar}</p>
              <p><strong>Address:</strong><br />{farmer.address}</p>
            </Col>

            <Col md={4}>
              <h6 className="text-muted">Bank Info</h6>
              <p><strong>Account No.:</strong> {farmer.bank.accountNumber}</p>
              <p><strong>IFSC:</strong> {farmer.bank.ifsc}</p>
              <p><strong>Bank Name:</strong> {farmer.bank.bankName}</p>

              <h6 className="mt-4 text-muted">Stats</h6>
              <p><strong>Crops:</strong> {farmer.crops}</p>
              <p><strong>Tasks Completed:</strong> {farmer.tasks}</p>
              <p><strong>Payments Received:</strong> {farmer.payments}</p>

              <Button variant="outline-success" className="mt-2 w-100">
                Edit Profile
              </Button>
            </Col>
          </Row>
        </Card>

        <Card className="p-3 shadow-sm border-0">
          <h6>Profile Completion</h6>
          <ProgressBar now={farmer.profileCompletion} label={`${farmer.profileCompletion}%`} />
          {farmer.profileCompletion < 100 && (
            <Button variant="warning" className="mt-3">
              Complete KYC
            </Button>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Profile;
