import React, { useState } from 'react';
import { Card, ListGroup, Badge, Button, Row, Col, Alert } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Order Status Update",
      message: "Your order ORD001 for Wheat has been shipped and is in transit.",
      type: "info",
      timestamp: "2024-01-15 14:30",
      read: false,
      category: "order"
    },
    {
      id: 2,
      title: "Payment Successful",
      message: "Payment of ₹2,500 for order ORD001 has been processed successfully.",
      type: "success",
      timestamp: "2024-01-15 12:15",
      read: false,
      category: "payment"
    },
    {
      id: 3,
      title: "New Product Available",
      message: "Fresh batch of Basmati Rice is now available from Suresh Patel.",
      type: "warning",
      timestamp: "2024-01-15 10:45",
      read: true,
      category: "product"
    },
    {
      id: 4,
      title: "Delivery Update",
      message: "Your order ORD002 will be delivered tomorrow between 2-4 PM.",
      type: "info",
      timestamp: "2024-01-14 16:20",
      read: true,
      category: "delivery"
    },
    {
      id: 5,
      title: "Price Alert",
      message: "Wheat prices have increased by 5% in your region.",
      type: "warning",
      timestamp: "2024-01-14 09:30",
      read: true,
      category: "price"
    },
    {
      id: 6,
      title: "Account Verification",
      message: "Your merchant account has been successfully verified.",
      type: "success",
      timestamp: "2024-01-13 11:00",
      read: true,
      category: "account"
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const getTypeBadge = (type) => {
    const typeColors = {
      'info': 'info',
      'success': 'success',
      'warning': 'warning',
      'danger': 'danger'
    };
    return <Badge bg={typeColors[type] || 'secondary'}>{type}</Badge>;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'order': '📦',
      'payment': '💳',
      'product': '🏪',
      'delivery': '🚚',
      'price': '💰',
      'account': '👤'
    };
    return icons[category] || '📢';
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (showUnreadOnly && notif.read) return false;
    if (filter !== 'all' && notif.category !== filter) return false;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const totalCount = notifications.length;

  return (
    <div className="merchant-page">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">🔔 Notifications</h4>
        
        {/* Notification Statistics */}
        <Row className="g-3 mb-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Total Notifications</h6>
                <h3 className="text-primary">{totalCount}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Unread</h6>
                <h3 className="text-warning">{unreadCount}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Orders</h6>
                <h3 className="text-info">{notifications.filter(n => n.category === 'order').length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Payments</h6>
                <h3 className="text-success">{notifications.filter(n => n.category === 'payment').length}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Filters and Actions */}
        <Card className="border-0 shadow-sm mb-4 merchant-stats-card">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <select 
                  className="form-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="order">Orders</option>
                  <option value="payment">Payments</option>
                  <option value="product">Products</option>
                  <option value="delivery">Delivery</option>
                  <option value="price">Price Alerts</option>
                  <option value="account">Account</option>
                </select>
              </Col>
              <Col md={4}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="unreadOnly"
                    checked={showUnreadOnly}
                    onChange={(e) => setShowUnreadOnly(e.target.checked)}
                  />
                  <label className="form-check-label text-white" htmlFor="unreadOnly">
                    Show unread only
                  </label>
                </div>
              </Col>
              <Col md={4} className="text-end">
                <Button 
                  variant="outline-light" 
                  size="sm"
                  onClick={markAllAsRead}
                  disabled={unreadCount === 0}
                >
                  📖 Mark All as Read
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Notifications List */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0 text-white">
              {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)} Notifications
              {showUnreadOnly && ' (Unread Only)'}
            </h5>
          </Card.Header>
          <Card.Body className="p-0">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted">No notifications found.</p>
              </div>
            ) : (
              <ListGroup variant="flush">
                {filteredNotifications.map((notification) => (
                  <ListGroup.Item 
                    key={notification.id}
                    className={`d-flex justify-content-between align-items-start p-3 ${
                      !notification.read ? 'bg-light' : ''
                    }`}
                  >
                    <div className="d-flex align-items-start flex-grow-1">
                      <div className="me-3 fs-4">
                        {getCategoryIcon(notification.category)}
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-1">
                          <h6 className="mb-1">
                            {notification.title}
                            {!notification.read && (
                              <Badge bg="danger" className="ms-2">New</Badge>
                            )}
                          </h6>
                          <small className="text-muted">{notification.timestamp}</small>
                        </div>
                        <p className="mb-1">{notification.message}</p>
                        <div className="d-flex gap-2">
                          {getTypeBadge(notification.type)}
                          <Badge bg="secondary">{notification.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      {!notification.read && (
                        <Button 
                          size="sm" 
                          variant="outline-primary"
                          onClick={() => markAsRead(notification.id)}
                        >
                          📖 Mark Read
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline-danger"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        🗑️ Delete
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Card.Body>
        </Card>

        {/* Notification Settings */}
        <Card className="border-0 shadow-sm mt-4 merchant-stats-card">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0 text-white">Notification Settings</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <h6 className="text-white">Email Notifications</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="emailOrders" defaultChecked />
                  <label className="form-check-label text-white" htmlFor="emailOrders">
                    Order updates
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="emailPayments" defaultChecked />
                  <label className="form-check-label text-white" htmlFor="emailPayments">
                    Payment confirmations
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="emailProducts" />
                  <label className="form-check-label text-white" htmlFor="emailProducts">
                    New product alerts
                  </label>
                </div>
              </Col>
              <Col md={6}>
                <h6 className="text-white">SMS Notifications</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="smsOrders" defaultChecked />
                  <label className="form-check-label text-white" htmlFor="smsOrders">
                    Order updates
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="smsPayments" />
                  <label className="form-check-label text-white" htmlFor="smsPayments">
                    Payment confirmations
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="smsDelivery" defaultChecked />
                  <label className="form-check-label text-white" htmlFor="smsDelivery">
                    Delivery updates
                  </label>
                </div>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <Button variant="outline-light">💾 Save Settings</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MerchantNotifications;
