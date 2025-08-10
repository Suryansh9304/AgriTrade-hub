import React, { useState } from 'react';
import { Card, Row, Col, Button, Badge, Modal, Form, InputGroup } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantInventory() {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: "Premium Wheat",
      farmer: "Amit Singh",
      quantity: "500 kg",
      price: "₹25/kg",
      totalPrice: "₹12,500",
      quality: "Grade A",
      location: "Punjab",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Basmati Rice",
      farmer: "Suresh Patel",
      quantity: "300 kg",
      price: "₹40/kg",
      totalPrice: "₹12,000",
      quality: "Grade A+",
      location: "Haryana",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Sweet Corn",
      farmer: "Mohan Das",
      quantity: "200 kg",
      price: "₹15/kg",
      totalPrice: "₹3,000",
      quality: "Fresh",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1601593768797-3d23e25b2444?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "Fresh Tomatoes",
      farmer: "Ramesh Kumar",
      quantity: "100 kg",
      price: "₹30/kg",
      totalPrice: "₹3,000",
      quality: "Organic",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "Potatoes",
      farmer: "Lakshmi Devi",
      quantity: "400 kg",
      price: "₹20/kg",
      totalPrice: "₹8,000",
      quality: "Grade B",
      location: "Bihar",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=150&h=150&fit=crop"
    },
    {
      id: 6,
      name: "Onions",
      farmer: "Ganesh Prasad",
      quantity: "250 kg",
      price: "₹18/kg",
      totalPrice: "₹4,500",
      quality: "Fresh",
      location: "Gujarat",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=150&h=150&fit=crop"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setOrderQuantity(1);
    setShowOrderModal(true);
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    setSelectedProduct(null);
  };

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    alert(`Order placed for ${orderQuantity} kg of ${selectedProduct.name}`);
    handleCloseModal();
  };

  return (
    <div className="merchant-page">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">🏪 Browse Available Products</h4>
        
        {/* Search and Filters */}
        <Card className="border-0 shadow-sm mb-4 merchant-stats-card">
          <Card.Body>
            <Row>
              <Col md={8}>
                <InputGroup>
                  <Form.Control
                    placeholder="Search products, farmers, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="outline-secondary">
                    🔍 Search
                  </Button>
                </InputGroup>
              </Col>
              <Col md={4}>
                <Form.Select>
                  <option>All Categories</option>
                  <option>Grains</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Pulses</option>
                </Form.Select>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Products Grid */}
        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col md={6} lg={4} key={product.id}>
              <Card className="border-0 shadow-sm card-hover h-100">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <Badge 
                    bg="success" 
                    className="position-absolute top-0 end-0 m-2"
                  >
                    {product.quality}
                  </Badge>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h6">{product.name}</Card.Title>
                  <Card.Text className="small text-muted mb-2">
                    <strong>Farmer:</strong> {product.farmer}<br/>
                    <strong>Location:</strong> {product.location}
                  </Card.Text>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-primary fw-bold">{product.price}</span>
                      <span className="text-muted small">Available: {product.quantity}</span>
                    </div>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="w-100"
                      onClick={() => handleOrderClick(product)}
                    >
                      📦 Place Order
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Order Modal */}
        <Modal show={showOrderModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Place Order - {selectedProduct?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProduct && (
              <div>
                <Row>
                  <Col md={6}>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col md={6}>
                    <h6>Product Details</h6>
                    <p><strong>Name:</strong> {selectedProduct.name}</p>
                    <p><strong>Farmer:</strong> {selectedProduct.farmer}</p>
                    <p><strong>Location:</strong> {selectedProduct.location}</p>
                    <p><strong>Quality:</strong> {selectedProduct.quality}</p>
                    <p><strong>Price:</strong> {selectedProduct.price}</p>
                    <p><strong>Available:</strong> {selectedProduct.quantity}</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Order Quantity (kg)</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        max={parseInt(selectedProduct.quantity)}
                        value={orderQuantity}
                        onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Total Price</Form.Label>
                      <Form.Control
                        type="text"
                        value={`₹${(parseInt(selectedProduct.price.replace('₹', '')) * orderQuantity).toLocaleString()}`}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handlePlaceOrder}>
              📦 Place Order
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MerchantInventory;
