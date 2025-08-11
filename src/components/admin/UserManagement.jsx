import React, { useState, useEffect } from "react";
import { Card, Table, Button, Form, ButtonGroup, Row, Col } from "react-bootstrap";

/*
Mock lists & functions. Replace with API calls:
- fetchFarmers(), fetchMerchants()
- apiApproveUser(type, id), apiBlockUser(type, id), apiRemoveUser(type, id)
*/

const initialFarmers = [
  { id: 1, name: "John Farmer", email: "john@farm.com", status: "Active" },
  { id: 2, name: "Rita Farm", email: "rita@farm.com", status: "Pending" }
];

const initialMerchants = [
  { id: 10, name: "Mike Merchant", email: "mike@shop.com", status: "Active" },
  { id: 11, name: "Shop Sara", email: "sara@shop.com", status: "Blocked" }
];

const UserManagement = () => {
  const [farmers, setFarmers] = useState([]);
  const [merchants, setMerchants] = useState([]);
  const [qFarm, setQFarm] = useState("");
  const [qMerch, setQMerch] = useState("");

  useEffect(() => {
    // TODO: replace these with GET API calls
    setFarmers(initialFarmers);
    setMerchants(initialMerchants);
  }, []);

  const action = (type, id, act) => {
    // replace with API call to update user status or delete
    alert(`${act} ${type} id:${id} (implement API)`);
    // Example local update:
    const updater = (list, setList) => {
      setList(list.map(item => item.id === id ? { ...item, status: act === "Approve" ? "Active" : act === "Block" ? "Blocked" : item.status } : item));
      if (act === "Remove") setList(list.filter(item => item.id !== id));
    };
    if (type === "farmer") updater(farmers, setFarmers);
    if (type === "merchant") updater(merchants, setMerchants);
  };

  return (
    <Card>
      <Card.Header>User Management</Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <h6>Farmers</h6>
            <Form.Control placeholder="Search farmers..." value={qFarm} onChange={(e) => setQFarm(e.target.value)} className="mb-2" />
            <Table size="sm" striped bordered responsive>
              <thead>
                <tr><th>Name</th><th>Email</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {farmers.filter(f => f.name.toLowerCase().includes(qFarm.toLowerCase())).map(f => (
                  <tr key={f.id}>
                    <td>{f.name}</td>
                    <td>{f.email}</td>
                    <td>{f.status}</td>
                    <td>
                      <ButtonGroup>
                        <Button size="sm" variant="success" onClick={() => action("farmer", f.id, "Approve")}>Approve</Button>
                        <Button size="sm" variant="warning" onClick={() => action("farmer", f.id, "Block")}>Block</Button>
                        <Button size="sm" variant="danger" onClick={() => action("farmer", f.id, "Remove")}>Remove</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col md={6}>
            <h6>Merchants</h6>
            <Form.Control placeholder="Search merchants..." value={qMerch} onChange={(e) => setQMerch(e.target.value)} className="mb-2" />
            <Table size="sm" striped bordered responsive>
              <thead>
                <tr><th>Name</th><th>Email</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {merchants.filter(m => m.name.toLowerCase().includes(qMerch.toLowerCase())).map(m => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.email}</td>
                    <td>{m.status}</td>
                    <td>
                      <ButtonGroup>
                        <Button size="sm" variant="success" onClick={() => action("merchant", m.id, "Approve")}>Approve</Button>
                        <Button size="sm" variant="warning" onClick={() => action("merchant", m.id, "Block")}>Block</Button>
                        <Button size="sm" variant="danger" onClick={() => action("merchant", m.id, "Remove")}>Remove</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserManagement;
