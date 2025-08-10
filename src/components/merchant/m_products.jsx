import React, { useState } from 'react';
import { Card, Row, Col, Table, Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { Search, Filter, Eye, Cart } from 'react-bootstrap-icons';
import "../css/Merchant.css";

function MerchantProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: "Premium Wheat",
      category: "Wheat",
      farmer: "Akshit Kumar",
      quantity: "1000 kg",
      price: "₹45/kg",
      quality: "Grade A",
      location: "Lucknow, UP",
      status: "Available"
    },
    {
      id: 2,
      name: "Basmati Rice",
      category: "Rice",
      farmer: "Rajesh Singh",
      quantity: "500 kg",
      price: "₹65/kg",
      quality: "Grade A",
      location: "Kanpur, UP",
      status: "Available"
    },
    {
      id: 3,
      name: "Yellow Maize",
      category: "Maize",
      farmer: "Priya Sharma",
      quantity: "800 kg",
      price: "₹35/kg",
      quality: "Grade B",
      location: "Varanasi, UP",
      status: "Available"
    },
    {
      id: 4,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      farmer: "Amit Patel",
      quantity: "200 kg",
      price: "₹40/kg",
      quality: "Grade A",
      location: "Allahabad, UP",
      status: "Available"
    },
    {
      id: 5,
      name: "Organic Potatoes",
      category: "Vegetables",
      farmer: "Sunita Devi",
      quantity: "300 kg",
      price: "₹25/kg",
      quality: "Grade A",
      location: "Gorakhpur, UP",
      status: "Available"
    }
  ];

  const categories = ['All', 'Wheat', 'Rice', 'Maize', 'Vegetables', 'Pulses'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status) => {
    return <Badge bg="success">{status}</Badge>;
  };

  const getQualityBadge = (quality) => {
    const variants = {
      'Grade A': 'success',
      'Grade B': 'warning',
      'Grade C': 'danger'
    };
    return <Badge bg={variants[quality] || 'secondary'}>{quality}</Badge>;
  };

  return (
    <div className="products-page">
      <div className="mt-4 px-3">
        <h3 className="text-white mb-4">Browse Available Products</h3>
        
        {/* Search and Filter Section */}
        <Card className="mb-4 shadow-sm border-0">
          <Card.Body>
            <Row className="g-3">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Text>
                    <Search />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search products or farmers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col md={4}>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col md={2}>
                <Button variant="outline-primary" className="w-100">
                  <Filter className="me-2" />
                  Filter
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Products Table */}
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0">Available Products ({filteredProducts.length})</h5>
          </Card.Header>
          <Card.Body>
            <Table responsive className="products-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Farmer</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Quality</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => (
                  <tr key={product.id}>
                    <td>
                      <strong>{product.name}</strong>
                    </td>
                    <td>{product.category}</td>
                    <td>{product.farmer}</td>
                    <td>{product.quantity}</td>
                    <td className="text-success fw-bold">{product.price}</td>
                    <td>{getQualityBadge(product.quality)}</td>
                    <td>{product.location}</td>
                    <td>{getStatusBadge(product.status)}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button size="sm" variant="outline-info">
                          <Eye className="me-1" />
                          View
                        </Button>
                        <Button size="sm" variant="success">
                          <Cart className="me-1" />
                          Order
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Product Statistics */}
        <Row className="g-4 mt-4">
          <Col md={3}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-primary">{products.length}</h4>
                <p className="mb-0">Total Products</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-success">{categories.length - 1}</h4>
                <p className="mb-0">Categories</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-info">{new Set(products.map(p => p.farmer)).size}</h4>
                <p className="mb-0">Active Farmers</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center card-hover">
              <Card.Body>
                <h4 className="text-warning">₹{products.reduce((sum, p) => sum + parseInt(p.price.replace('₹', '')), 0).toLocaleString()}</h4>
                <p className="mb-0">Avg Price/kg</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MerchantProducts;
