import React, { useState } from 'react';
import { Card, Row, Col, Table, Badge, Button, ProgressBar, Alert } from 'react-bootstrap';
import { Truck, MapPin, Clock, CheckCircle, ExclamationTriangle } from 'react-bootstrap-icons';
import "../css/Merchant.css";

function MerchantDeliveries() {
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const deliveries = [
    {
      id: "DEL001",
      orderId: "ORD001",
      product: "Premium Wheat",
      farmer: "Akshit Kumar",
      quantity: "500 kg",
      pickupDate: "2024-01-18",
      expectedDelivery: "2024-01-20",
      currentLocation: "Lucknow Hub",
      status: "In Transit",
      progress: 75,
      driver: "Rajesh Kumar",
      vehicle: "UP-32-AB-1234",
      contact: "+91 98765 43210",
      estimatedArrival: "2 hours",
      lastUpdate: "2024-01-19 14:30"
    },
    {
      id: "DEL002",
      orderId: "ORD002",
      product: "Basmati Rice",
      farmer: "Rajesh Singh",
      quantity: "300 kg",
      pickupDate: "2024-01-17",
      expectedDelivery: "2024-01-18",
      currentLocation: "Kanpur Hub",
      status: "Out for Delivery",
      progress: 90,
      driver: "Amit Singh",
      vehicle: "UP-78-CD-5678",
      contact: "+91 98765 43211",
      estimatedArrival: "30 minutes",
      lastUpdate: "2024-01-19 15:45"
    },
    {
      id: "DEL003",
      orderId: "ORD003",
      product: "Yellow Maize",
      farmer: "Priya Sharma",
      quantity: "400 kg",
      pickupDate: "2024-01-16",
      expectedDelivery: "2024-01-17",
      currentLocation: "Delivered",
      status: "Delivered",
      progress: 100,
      driver: "Suresh Patel",
      vehicle: "UP-45-EF-9012",
      contact: "+91 98765 43212",
      estimatedArrival: "Delivered",
      lastUpdate: "2024-01-17 16:20"
    },
    {
      id: "DEL004",
      orderId: "ORD005",
      product: "Organic Potatoes",
      farmer: "Sunita Devi",
      quantity: "200 kg",
      pickupDate: "2024-01-15",
      expectedDelivery: "2024-01-16",
      currentLocation: "Varanasi Hub",
      status: "Delayed",
      progress: 60,
      driver: "Mohan Das",
      vehicle: "UP-67-GH-3456",
      contact: "+91 98765 43213",
      estimatedArrival: "4 hours",
      lastUpdate: "2024-01-19 12:15"
    }
  ];

  const getStatusBadge = (status) => {
    const variants = {
      'In Transit': 'primary',
      'Out for Delivery': 'info',
      'Delivered': 'success',
      'Delayed': 'warning',
      'Cancelled': 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'In Transit': return <Truck className="text-primary" />;
      case 'Out for Delivery': return <Truck className="text-info" />;
      case 'Delivered': return <CheckCircle className="text-success" />;
      case 'Delayed': return <ExclamationTriangle className="text-warning" />;
      default: return <Clock className="text-secondary" />;
    }
  };

  const getProgressVariant = (status) => {
    switch(status) {
      case 'In Transit': return 'primary';
      case 'Out for Delivery': return 'info';
      case 'Delivered': return 'success';
      case 'Delayed': return 'warning';
      default: return 'secondary';
    }
  };

  const deliveryStats = {
    total: deliveries.length,
    inTransit: deliveries.filter(d => d.status === 'In Transit').length,
    outForDelivery: deliveries.filter(d => d.status === 'Out for Delivery').length,
    delivered: deliveries.filter(d => d.status === 'Delivered').length,
    delayed: deliveries.filter(d => d.status === 'Delayed').length
  };

  const handleTrackDelivery = (delivery) => {
    setSelectedDelivery(delivery);
  };

  return (
    <div className="deliveries-page">
      <div className="mt-4 px-3">
        <h3 className="text-white mb-4">Track Deliveries</h3>
        
        {/* Delivery Statistics */}
        <Row className="g-4 mb-4">
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-primary">{deliveryStats.total}</h4>
                <p className="mb-0">Total Deliveries</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-primary">{deliveryStats.inTransit}</h4>
                <p className="mb-0">In Transit</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-info">{deliveryStats.outForDelivery}</h4>
                <p className="mb-0">Out for Delivery</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-success">{deliveryStats.delivered}</h4>
                <p className="mb-0">Delivered</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-warning">{deliveryStats.delayed}</h4>
                <p className="mb-0">Delayed</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-info">Live</h4>
                <p className="mb-0">Real-time Tracking</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Live Tracking Alert */}
        <Alert variant="info" className="mb-4">
          <div className="d-flex align-items-center">
            <Truck className="me-2" />
            <strong>Live Tracking Active:</strong> All deliveries are being tracked in real-time. 
            Updates are refreshed every 5 minutes.
          </div>
        </Alert>

        {/* Deliveries Table */}
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0">Active Deliveries ({deliveries.filter(d => d.status !== 'Delivered').length})</h5>
          </Card.Header>
          <Card.Body>
            <Table responsive className="deliveries-table">
              <thead>
                <tr>
                  <th>Delivery ID</th>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Farmer</th>
                  <th>Current Location</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Driver</th>
                  <th>ETA</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map(delivery => (
                  <tr key={delivery.id}>
                    <td>
                      <strong>{delivery.id}</strong>
                    </td>
                    <td>{delivery.orderId}</td>
                    <td>{delivery.product}</td>
                    <td>{delivery.farmer}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <MapPin className="text-primary" />
                        {delivery.currentLocation}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        {getStatusIcon(delivery.status)}
                        {getStatusBadge(delivery.status)}
                      </div>
                    </td>
                    <td>
                      <ProgressBar 
                        now={delivery.progress} 
                        variant={getProgressVariant(delivery.status)}
                        style={{height: '8px'}}
                      />
                      <small className="text-muted">{delivery.progress}%</small>
                    </td>
                    <td>
                      <div>
                        <div>{delivery.driver}</div>
                        <small className="text-muted">{delivery.vehicle}</small>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <div className="fw-bold">{delivery.estimatedArrival}</div>
                        <small className="text-muted">Last: {delivery.lastUpdate}</small>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline-primary"
                          onClick={() => handleTrackDelivery(delivery)}
                        >
                          <MapPin className="me-1" />
                          Track
                        </Button>
                        <Button size="sm" variant="outline-info">
                          <Truck className="me-1" />
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Delivery Details Modal */}
        {selectedDelivery && (
          <Card className="mt-4 shadow-sm border-0">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <Truck className="me-2" />
                Delivery Details - {selectedDelivery.id}
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>Order Information</h6>
                  <p><strong>Order ID:</strong> {selectedDelivery.orderId}</p>
                  <p><strong>Product:</strong> {selectedDelivery.product}</p>
                  <p><strong>Quantity:</strong> {selectedDelivery.quantity}</p>
                  <p><strong>Farmer:</strong> {selectedDelivery.farmer}</p>
                </Col>
                <Col md={6}>
                  <h6>Delivery Information</h6>
                  <p><strong>Pickup Date:</strong> {selectedDelivery.pickupDate}</p>
                  <p><strong>Expected Delivery:</strong> {selectedDelivery.expectedDelivery}</p>
                  <p><strong>Current Status:</strong> {getStatusBadge(selectedDelivery.status)}</p>
                  <p><strong>Progress:</strong> {selectedDelivery.progress}%</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={6}>
                  <h6>Driver & Vehicle</h6>
                  <p><strong>Driver:</strong> {selectedDelivery.driver}</p>
                  <p><strong>Vehicle:</strong> {selectedDelivery.vehicle}</p>
                  <p><strong>Contact:</strong> {selectedDelivery.contact}</p>
                </Col>
                <Col md={6}>
                  <h6>Current Status</h6>
                  <p><strong>Location:</strong> {selectedDelivery.currentLocation}</p>
                  <p><strong>ETA:</strong> {selectedDelivery.estimatedArrival}</p>
                  <p><strong>Last Update:</strong> {selectedDelivery.lastUpdate}</p>
                </Col>
              </Row>
              <div className="text-center mt-3">
                <Button variant="success" className="me-2">
                  <MapPin className="me-1" />
                  View on Map
                </Button>
                <Button variant="info" className="me-2">
                  <Truck className="me-1" />
                  Contact Driver
                </Button>
                <Button variant="outline-secondary" onClick={() => setSelectedDelivery(null)}>
                  Close
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default MerchantDeliveries;
