import React from "react";
import { Card } from "react-bootstrap";

const StatCard = ({ title, value, variant = "primary" }) => {
  return (
    <Card className={`text-white bg-${variant} mb-3`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h3>{value}</h3>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
