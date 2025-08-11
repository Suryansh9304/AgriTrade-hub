import React from "react";
import { Card, ListGroup } from "react-bootstrap";

/*
In a real app, fetch system metrics from monitoring endpoints:
- /api/health/active-users
- /api/health/issues
- /api/health/maintenance
*/

const SystemHealth = ({ metrics = { activeUsers: 8, issues: 0, maintenance: "None" } }) => {
  return (
    <Card>
      <Card.Header>System Health</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Active users online: {metrics.activeUsers}</ListGroup.Item>
          <ListGroup.Item>Technical issues: {metrics.issues}</ListGroup.Item>
          <ListGroup.Item>Pending maintenance: {metrics.maintenance}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SystemHealth;
