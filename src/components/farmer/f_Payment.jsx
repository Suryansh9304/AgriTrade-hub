import React from "react";
import { Table, Card } from "react-bootstrap";
import "../css/Farmer.css"; // Make sure farmer.css is imported

function Payments() {
  // Dummy payment data — you can replace this with real backend/API data later
  const payments = [
    { id: 1, date: "2025-07-25", amount: "₹5,000", status: "Received" },
    { id: 2, date: "2025-08-01", amount: "₹3,000", status: "Pending" },
    { id: 3, date: "2025-08-05", amount: "₹7,500", status: "Received" },
  ];

  return (
    <div className="farmer-page">
      <Card className="shadow-sm">
        <Card.Body className="farmer-page">
          <Card.Title className="mb-4"> Payment Status</Card.Title>
          <Table striped bordered hover responsive>
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment.id}>
                  <td>{index + 1}</td>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        payment.status === "Received"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Payments;
