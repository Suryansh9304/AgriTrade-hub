import React, { useState, useEffect } from "react";
import { Card, Table, Button, Form } from "react-bootstrap";
import { saveAs } from "file-saver";

/* Mock payments */
const mockPayments = [
  { id: "PAY001", user: "John Farmer", amount: 1200, status: "Completed", date: "2025-08-01" },
  { id: "PAY002", user: "Shop Sara", amount: 700, status: "Pending", date: "2025-08-02" },
];

const PaymentsOverview = () => {
  const [payments, setPayments] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setPayments(mockPayments);
  }, []);

  const exportCSV = () => {
    const header = ["id,user,amount,status,date"];
    const rows = payments.map(p => `${p.id},${p.user},${p.amount},${p.status},${p.date}`);
    const csv = header.concat(rows).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "payments.csv");
  };

  const filtered = payments.filter(p => filter === "All" || p.status === filter);

  return (
    <Card>
      <Card.Header>Payments Overview</Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <Form.Select style={{ width: 200 }} value={filter} onChange={e => setFilter(e.target.value)}>
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </Form.Select>
          <div>
            <Button variant="outline-primary" onClick={exportCSV}>Export CSV</Button>
          </div>
        </div>

        <Table size="sm" bordered striped responsive>
          <thead><tr><th>ID</th><th>User</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.user}</td>
                <td>{p.amount}</td>
                <td>{p.status}</td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PaymentsOverview;
