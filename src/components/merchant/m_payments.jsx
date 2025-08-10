import React, { useState } from 'react';
import { Card, Row, Col, Table, Badge, Button, ProgressBar, Alert } from 'react-bootstrap';
import { CreditCard, CheckCircle, Clock, XCircle, ExclamationTriangle, Download } from 'react-bootstrap-icons';
import "../css/Merchant.css";

function MerchantPayments() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const payments = [
    {
      id: "PAY001",
      orderId: "ORD001",
      product: "Premium Wheat",
      farmer: "Akshit Kumar",
      amount: "₹22,500",
      paymentMethod: "Bank Transfer",
      status: "Completed",
      transactionId: "TXN123456789",
      paymentDate: "2024-01-15",
      dueDate: "2024-01-15",
      invoice: "INV001.pdf"
    },
    {
      id: "PAY002",
      orderId: "ORD002",
      product: "Basmati Rice",
      farmer: "Rajesh Singh",
      amount: "₹19,500",
      paymentMethod: "UPI",
      status: "Pending",
      transactionId: "TXN987654321",
      paymentDate: "-",
      dueDate: "2024-01-18",
      invoice: "INV002.pdf"
    },
    {
      id: "PAY003",
      orderId: "ORD003",
      product: "Yellow Maize",
      farmer: "Priya Sharma",
      amount: "₹14,000",
      paymentMethod: "Credit Card",
      status: "Completed",
      transactionId: "TXN456789123",
      paymentDate: "2024-01-13",
      dueDate: "2024-01-17",
      invoice: "INV003.pdf"
    },
    {
      id: "PAY004",
      orderId: "ORD004",
      product: "Fresh Tomatoes",
      farmer: "Amit Patel",
      amount: "₹4,000",
      paymentMethod: "Bank Transfer",
      status: "Failed",
      transactionId: "TXN789123456",
      paymentDate: "2024-01-12",
      dueDate: "2024-01-15",
      invoice: "INV004.pdf"
    },
    {
      id: "PAY005",
      orderId: "ORD005",
      product: "Organic Potatoes",
      farmer: "Sunita Devi",
      amount: "₹5,000",
      paymentMethod: "UPI",
      status: "Processing",
      transactionId: "TXN321654987",
      paymentDate: "2024-01-11",
      dueDate: "2024-01-16",
      invoice: "INV005.pdf"
    }
  ];

  const getStatusBadge = (status) => {
    const variants = {
      'Completed': 'success',
      'Pending': 'warning',
      'Processing': 'info',
      'Failed': 'danger',
      'Cancelled': 'secondary'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return <CheckCircle className="text-success" />;
      case 'Pending': return <Clock className="text-warning" />;
      case 'Processing': return <Clock className="text-info" />;
      case 'Failed': return <XCircle className="text-danger" />;
      case 'Cancelled': return <XCircle className="text-secondary" />;
      default: return <Clock className="text-secondary" />;
    }
  };

  const getPaymentMethodIcon = (method) => {
    switch(method) {
      case 'Bank Transfer': return <CreditCard className="text-primary" />;
      case 'UPI': return <CreditCard className="text-success" />;
      case 'Credit Card': return <CreditCard className="text-info" />;
      default: return <CreditCard className="text-secondary" />;
    }
  };

  const paymentStats = {
    total: payments.length,
    completed: payments.filter(p => p.status === 'Completed').length,
    pending: payments.filter(p => p.status === 'Pending').length,
    processing: payments.filter(p => p.status === 'Processing').length,
    failed: payments.filter(p => p.status === 'Failed').length,
    totalAmount: payments.reduce((sum, p) => sum + parseInt(p.amount.replace('₹', '').replace(',', '')), 0),
    pendingAmount: payments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + parseInt(p.amount.replace('₹', '').replace(',', '')), 0)
  };

  const handleViewPayment = (payment) => {
    setSelectedPayment(payment);
  };

  const handleDownloadInvoice = (invoice) => {
    // Simulate invoice download
    alert(`Downloading ${invoice}`);
  };

  return (
    <div className="merchant-page">
      <div className="mt-4 px-3">
        <h3 className="text-white mb-4">Payment Status</h3>
        
        {/* Payment Statistics */}
        <Row className="g-4 mb-4">
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-primary">{paymentStats.total}</h4>
                <p className="mb-0">Total Payments</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-success">{paymentStats.completed}</h4>
                <p className="mb-0">Completed</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-warning">{paymentStats.pending}</h4>
                <p className="mb-0">Pending</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-info">{paymentStats.processing}</h4>
                <p className="mb-0">Processing</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-danger">{paymentStats.failed}</h4>
                <p className="mb-0">Failed</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-warning">₹{paymentStats.pendingAmount.toLocaleString()}</h4>
                <p className="mb-0">Pending Amount</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Payment Summary */}
        <Row className="g-4 mb-4">
          <Col md={6}>
            <Card className="card-hover">
              <Card.Body>
                <h6>Total Payment Amount</h6>
                <h3 className="text-success">₹{paymentStats.totalAmount.toLocaleString()}</h3>
                <ProgressBar 
                  now={((paymentStats.totalAmount - paymentStats.pendingAmount) / paymentStats.totalAmount) * 100} 
                  variant="success"
                  className="mt-2"
                />
                <small className="text-muted">
                  {paymentStats.totalAmount - paymentStats.pendingAmount} of {paymentStats.totalAmount} paid
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-hover">
              <Card.Body>
                <h6>Payment Methods Used</h6>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>Bank Transfer</span>
                  <Badge bg="primary">2</Badge>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>UPI</span>
                  <Badge bg="success">2</Badge>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Credit Card</span>
                  <Badge bg="info">1</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Payment Alerts */}
        {paymentStats.pending > 0 && (
          <Alert variant="warning" className="mb-4">
            <div className="d-flex align-items-center">
              <ExclamationTriangle className="me-2" />
              <strong>Payment Alert:</strong> You have {paymentStats.pending} pending payments totaling ₹{paymentStats.pendingAmount.toLocaleString()}. 
              Please complete these payments to avoid any delays in your orders.
            </div>
          </Alert>
        )}

        {/* Payments Table */}
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0">Payment Details ({payments.length})</h5>
          </Card.Header>
          <Card.Body>
            <Table responsive className="orders-table">
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Farmer</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Payment Date</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(payment => (
                  <tr key={payment.id}>
                    <td>
                      <strong>{payment.id}</strong>
                    </td>
                    <td>{payment.orderId}</td>
                    <td>{payment.product}</td>
                    <td>{payment.farmer}</td>
                    <td className="text-success fw-bold">{payment.amount}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        {getPaymentMethodIcon(payment.paymentMethod)}
                        {payment.paymentMethod}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        {getStatusIcon(payment.status)}
                        {getStatusBadge(payment.status)}
                      </div>
                    </td>
                    <td>{payment.paymentDate}</td>
                    <td>{payment.dueDate}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline-info"
                          onClick={() => handleViewPayment(payment)}
                        >
                          <CreditCard className="me-1" />
                          View
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline-secondary"
                          onClick={() => handleDownloadInvoice(payment.invoice)}
                        >
                          <Download className="me-1" />
                          Invoice
                        </Button>
                        {payment.status === 'Pending' && (
                          <Button size="sm" variant="success">
                            Pay Now
                          </Button>
                        )}
                        {payment.status === 'Failed' && (
                          <Button size="sm" variant="warning">
                            Retry
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

        {/* Payment Details Modal */}
        {selectedPayment && (
          <Card className="mt-4 shadow-sm border-0">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <CreditCard className="me-2" />
                Payment Details - {selectedPayment.id}
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>Order Information</h6>
                  <p><strong>Order ID:</strong> {selectedPayment.orderId}</p>
                  <p><strong>Product:</strong> {selectedPayment.product}</p>
                  <p><strong>Farmer:</strong> {selectedPayment.farmer}</p>
                  <p><strong>Amount:</strong> <span className="text-success fw-bold">{selectedPayment.amount}</span></p>
                </Col>
                <Col md={6}>
                  <h6>Payment Information</h6>
                  <p><strong>Payment Method:</strong> {selectedPayment.paymentMethod}</p>
                  <p><strong>Status:</strong> {getStatusBadge(selectedPayment.status)}</p>
                  <p><strong>Transaction ID:</strong> {selectedPayment.transactionId}</p>
                  <p><strong>Due Date:</strong> {selectedPayment.dueDate}</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={12}>
                  <h6>Payment Timeline</h6>
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-center">
                      <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                        <CheckCircle />
                      </div>
                      <small>Order Placed</small>
                    </div>
                    <div className="flex-grow-1">
                      <div className="progress" style={{height: '2px'}}>
                        <div className="progress-bar bg-success" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`rounded-circle d-flex align-items-center justify-content-center ${selectedPayment.status === 'Completed' ? 'bg-success text-white' : 'bg-secondary text-white'}`} style={{width: '40px', height: '40px'}}>
                        {selectedPayment.status === 'Completed' ? <CheckCircle /> : <Clock />}
                      </div>
                      <small>Payment {selectedPayment.status === 'Completed' ? 'Completed' : 'Pending'}</small>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-3">
                <Button variant="success" className="me-2">
                  <CreditCard className="me-1" />
                  {selectedPayment.status === 'Pending' ? 'Pay Now' : 'View Receipt'}
                </Button>
                <Button variant="info" className="me-2">
                  <Download className="me-1" />
                  Download Invoice
                </Button>
                <Button variant="outline-secondary" onClick={() => setSelectedPayment(null)}>
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

export default MerchantPayments;
