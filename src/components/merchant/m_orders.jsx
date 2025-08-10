import React, { useState } from 'react';
import { Card, Row, Col, Table, Badge, Button, ProgressBar } from 'react-bootstrap';
import { Eye, Truck, CheckCircle, XCircle, Clock } from 'react-bootstrap-icons';
import "../css/Merchant.css";

function MerchantOrders() {
  const [selectedStatus, setSelectedStatus] = useState('All');

  const orders = [
    {
      id: "ORD001",
      product: "Premium Wheat",
      farmer: "Akshit Kumar",
      quantity: "500 kg",
      price: "₹45/kg",
      total: "₹22,500",
      orderDate: "2024-01-15",
      expectedDelivery: "2024-01-20",
      status: "Pending",
      progress: 25
    },
    {
      id: "ORD002",
      product: "Basmati Rice",
      farmer: "Rajesh Singh",
      quantity: "300 kg",
      price: "₹65/kg",
      total: "₹19,500",
      orderDate: "2024-01-14",
      expectedDelivery: "2024-01-18",
      status: "In Transit",
      progress: 75
    },
    {
      id: "ORD003",
      product: "Yellow Maize",
      farmer: "Priya Sharma",
      quantity: "400 kg",
      price: "₹35/kg",
      total: "₹14,000",
      orderDate: "2024-01-13",
      expectedDelivery: "2024-01-17",
      status: "Completed",
      progress: 100
    },
    {
      id: "ORD004",
      product: "Fresh Tomatoes",
      farmer: "Amit Patel",
      quantity: "100 kg",
      price: "₹40/kg",
      total: "₹4,000",
      orderDate: "2024-01-12",
      expectedDelivery: "2024-01-15",
      status: "Cancelled",
      progress: 0
    },
    {
      id: "ORD005",
      product: "Organic Potatoes",
      farmer: "Sunita Devi",
      quantity: "200 kg",
      price: "₹25/kg",
      total: "₹5,000",
      orderDate: "2024-01-11",
      expectedDelivery: "2024-01-16",
      status: "Processing",
      progress: 50
    }
  ];

  const statuses = ['All', 'Pending', 'Processing', 'In Transit', 'Completed', 'Cancelled'];

  const filteredOrders = orders.filter(order => 
    selectedStatus === 'All' || order.status === selectedStatus
  );

  const getStatusBadge = (status) => {
    const variants = {
      'Pending': 'warning',
      'Processing': 'info',
      'In Transit': 'primary',
      'Completed': 'success',
      'Cancelled': 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Pending': return <Clock className="text-warning" />;
      case 'Processing': return <Clock className="text-info" />;
      case 'In Transit': return <Truck className="text-primary" />;
      case 'Completed': return <CheckCircle className="text-success" />;
      case 'Cancelled': return <XCircle className="text-danger" />;
      default: return <Clock className="text-secondary" />;
    }
  };

  const getProgressVariant = (status) => {
    switch(status) {
      case 'Pending': return 'warning';
      case 'Processing': return 'info';
      case 'In Transit': return 'primary';
      case 'Completed': return 'success';
      case 'Cancelled': return 'danger';
      default: return 'secondary';
    }
  };

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'Pending').length,
    processing: orders.filter(o => o.status === 'Processing').length,
    inTransit: orders.filter(o => o.status === 'In Transit').length,
    completed: orders.filter(o => o.status === 'Completed').length,
    cancelled: orders.filter(o => o.status === 'Cancelled').length
  };

  return (
    <div className="orders-page">
      <div className="mt-4 px-3">
        <h3 className="text-white mb-4">My Orders</h3>
        
        {/* Order Statistics */}
        <Row className="g-4 mb-4">
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-primary">{orderStats.total}</h4>
                <p className="mb-0">Total Orders</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-warning">{orderStats.pending}</h4>
                <p className="mb-0">Pending</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-info">{orderStats.processing}</h4>
                <p className="mb-0">Processing</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-primary">{orderStats.inTransit}</h4>
                <p className="mb-0">In Transit</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-success">{orderStats.completed}</h4>
                <p className="mb-0">Completed</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-danger">{orderStats.cancelled}</h4>
                <p className="mb-0">Cancelled</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Filter Section */}
        <Card className="mb-4 shadow-sm border-0">
          <Card.Body>
            <Row className="g-3 align-items-center">
              <Col md={4}>
                <label className="form-label text-white">Filter by Status:</label>
                <select 
                  className="form-select"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </Col>
              <Col md={8} className="text-end">
                <Button variant="outline-light" className="me-2">
                  Export Orders
                </Button>
                <Button variant="success">
                  Place New Order
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Orders Table */}
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0">Order Details ({filteredOrders.length})</h5>
          </Card.Header>
          <Card.Body>
            <Table responsive className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Farmer</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Order Date</th>
                  <th>Expected Delivery</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <strong>{order.id}</strong>
                    </td>
                    <td>{order.product}</td>
                    <td>{order.farmer}</td>
                    <td>{order.quantity}</td>
                    <td className="text-success fw-bold">{order.total}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.expectedDelivery}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        {getStatusIcon(order.status)}
                        {getStatusBadge(order.status)}
                      </div>
                    </td>
                    <td>
                      <ProgressBar 
                        now={order.progress} 
                        variant={getProgressVariant(order.status)}
                        style={{height: '8px'}}
                      />
                      <small className="text-muted">{order.progress}%</small>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button size="sm" variant="outline-info">
                          <Eye className="me-1" />
                          View
                        </Button>
                        {order.status === 'Pending' && (
                          <Button size="sm" variant="outline-danger">
                            Cancel
                          </Button>
                        )}
                        {order.status === 'In Transit' && (
                          <Button size="sm" variant="outline-success">
                            Track
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MerchantOrders;
