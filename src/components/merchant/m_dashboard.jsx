import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantDashboard() {
  const stats = {
    name: "Rajesh",
    totalProducts: 45,
    productCategories: {
      Wheat: 15,
      Rice: 12,
      Maize: 8,
      Vegetables: 10
    },
    orders: {
      pending: 5,
      completed: 23,
      cancelled: 2
    },
    revenue: {
      monthly: 125000,
      pending: 45000
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
            <p className="mb-0 text-black">Here's your trading summary & updates</p>
          </div>
        </Card>
  
        {/* Dashboard Stats */}
        <h5 className="text-white mb-3">Merchant Dashboard Overview</h5>
        <Row className="g-4">
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Total Products</h6>
                <h2 className="text-success">{stats.totalProducts}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Orders Pending</h6>
                <h2 className="text-warning">{stats.orders.pending}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Orders Completed</h6>
                <h2 className="text-primary">{stats.orders.completed}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Monthly Revenue</h6>
                <h2 className="text-info">₹{stats.revenue.monthly.toLocaleString()}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Revenue and Orders Summary */}
        <Row className="g-4 mt-3">
          <Col md={6}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Pending Payments</h6>
                <h3 className="text-danger">₹{stats.revenue.pending.toLocaleString()}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Cancelled Orders</h6>
                <h3 className="text-secondary">{stats.orders.cancelled}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* Product Categories */}
        <hr className="my-4 border-light" />
        <h5 className="text-white mb-3">Product Categories</h5>
        <Row className="g-3">
          {Object.entries(stats.productCategories).map(([product, count]) => (
            <Col md={3} key={product}>
              <Card className="border-0 shadow-sm text-center card-hover">
                <Card.Body>
                  <h6>{product}</h6>
                  <h3 className="text-info">{count}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Quick Actions */}
        <hr className="my-4 border-light" />
        <h5 className="text-white mb-3">Quick Actions</h5>
        <Row className="g-3">
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center card-hover action-card">
              <Card.Body>
                <h6>Browse Products</h6>
                <p className="text-muted">View available agricultural produce</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center card-hover action-card">
              <Card.Body>
                <h6>Place Orders</h6>
                <p className="text-muted">Order fresh products from farmers</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center card-hover action-card">
              <Card.Body>
                <h6>Track Deliveries</h6>
                <p className="text-muted">Monitor order status and delivery</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MerchantDashboard;
