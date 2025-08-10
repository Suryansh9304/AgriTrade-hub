import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import "../css/Farmer.css"

function FarmerDashboard() {
  const stats = {
    name: "Akshit",
    totalCrops: 12,
    cropCategories: {
      Wheat: 5,
      Rice: 4,
      Maize: 3
    },
    tasks: 8,
    payments: {
      pending: 2,
      received: 6
    }
  };
  return (
    <div className="dashboard-gradient">
      <div className="mt-4 px-3">
        {/* Profile Card */}
        <Card className="mb-4 shadow-sm border-0 d-flex flex-row align-items-center p-3">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            roundedCircle
            width={70}
            height={70}
            className="me-3"
          />
          <div>
            <h4 className="mb-1 text-black">Welcome, {stats.name}</h4>
            <p className="mb-0 text-black">Here's your crop summary & updates</p>
          </div>
        </Card>
  
        {/* Dashboard Stats */}
        <h5 className="text-white mb-3">Farmer Dashboard Overview</h5>
        <Row className="g-4">
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Total Crops</h6>
                <h2 className="text-success">{stats.totalCrops}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Tasks Assigned</h6>
                <h2 className="text-warning">{stats.tasks}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Payments Received</h6>
                <h2 className="text-primary">{stats.payments.received}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Payments Pending</h6>
                <h2 className="text-danger">{stats.payments.pending}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* Crop Categories */}
        <hr className="my-4 border-light" />
        <h5 className="text-white mb-3">Crop Categories</h5>
        <Row className="g-3">
          {Object.entries(stats.cropCategories).map(([crop, count]) => (
            <Col md={4} key={crop}>
              <Card className="border-0 shadow-sm text-center card-hover">
                <Card.Body>
                  <h6>{crop}</h6>
                  <h3 className="text-info">{count}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
  
}

export default FarmerDashboard;