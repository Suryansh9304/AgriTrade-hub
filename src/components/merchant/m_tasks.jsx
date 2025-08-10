import React, { useState } from 'react';
import { Card, ListGroup, Badge, Button, Row, Col, ProgressBar, Alert } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantTasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Review Wheat Quality Samples",
      description: "Inspect and approve wheat samples from Farmer ID: F001 before processing order ORD001",
      priority: "high",
      status: "in-progress",
      assignedDate: "2024-01-15",
      dueDate: "2024-01-18",
      progress: 65,
      category: "quality-check",
      assignedBy: "Admin Team"
    },
    {
      id: 2,
      title: "Update Product Inventory",
      description: "Verify current stock levels and update inventory system with latest counts",
      priority: "medium",
      status: "pending",
      assignedDate: "2024-01-14",
      dueDate: "2024-01-20",
      progress: 0,
      category: "inventory",
      assignedBy: "System"
    },
    {
      id: 3,
      title: "Process Payment for Order ORD002",
      description: "Complete payment processing for rice order from Farmer ID: F003",
      priority: "high",
      status: "completed",
      assignedDate: "2024-01-13",
      dueDate: "2024-01-15",
      progress: 100,
      category: "payment",
      assignedBy: "Finance Team"
    },
    {
      id: 4,
      title: "Schedule Delivery for Order ORD003",
      description: "Coordinate with logistics team for maize delivery to warehouse",
      priority: "medium",
      status: "in-progress",
      assignedDate: "2024-01-12",
      dueDate: "2024-01-19",
      progress: 40,
      category: "logistics",
      assignedBy: "Operations"
    },
    {
      id: 5,
      title: "Review Price Quotations",
      description: "Evaluate and approve price quotes for upcoming procurement cycle",
      priority: "low",
      status: "pending",
      assignedDate: "2024-01-11",
      dueDate: "2024-01-25",
      progress: 0,
      category: "pricing",
      assignedBy: "Procurement Team"
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const getPriorityBadge = (priority) => {
    const priorityColors = {
      'high': 'danger',
      'medium': 'warning',
      'low': 'info'
    };
    return <Badge bg={priorityColors[priority] || 'secondary'}>{priority.toUpperCase()}</Badge>;
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      'pending': 'secondary',
      'in-progress': 'primary',
      'completed': 'success',
      'overdue': 'danger'
    };
    return <Badge bg={statusColors[status] || 'secondary'}>{status.replace('-', ' ').toUpperCase()}</Badge>;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'quality-check': '🔍',
      'inventory': '📦',
      'payment': '💳',
      'logistics': '🚚',
      'pricing': '💰'
    };
    return icons[category] || '📋';
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const updateProgress = (id, newProgress) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, progress: newProgress } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter !== 'all' && task.status !== filter) return false;
    if (priorityFilter !== 'all' && task.priority !== priorityFilter) return false;
    return true;
  });

  const taskStats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
    overdue: tasks.filter(t => new Date(t.dueDate) < new Date() && t.status !== 'completed').length
  };

  return (
    <div className="merchant-page">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">📋 Assigned Tasks</h4>
        
        {/* Task Statistics */}
        <Row className="g-3 mb-4">
          <Col md={2}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Total Tasks</h6>
                <h3 className="text-primary">{taskStats.total}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Pending</h6>
                <h3 className="text-warning">{taskStats.pending}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>In Progress</h6>
                <h3 className="text-info">{taskStats.inProgress}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Completed</h6>
                <h3 className="text-success">{taskStats.completed}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Overdue</h6>
                <h3 className="text-danger">{taskStats.overdue}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Filters */}
        <Card className="border-0 shadow-sm mb-4 merchant-stats-card">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <select 
                  className="form-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="overdue">Overdue</option>
                </select>
              </Col>
              <Col md={4}>
                <select 
                  className="form-select"
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </Col>
              <Col md={4} className="text-end">
                <Button variant="outline-light" size="sm">
                  📊 Export Tasks
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Tasks List */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0 text-white">
              {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks
              {priorityFilter !== 'all' && ` (${priorityFilter} Priority)`}
            </h5>
          </Card.Header>
          <Card.Body className="p-0">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted">No tasks found.</p>
              </div>
            ) : (
              <ListGroup variant="flush">
                {filteredTasks.map((task) => (
                  <ListGroup.Item 
                    key={task.id}
                    className="p-3 border-bottom"
                  >
                    <div className="d-flex align-items-start">
                      <div className="me-3 fs-4">
                        {getCategoryIcon(task.category)}
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="mb-1">{task.title}</h6>
                          <div className="d-flex gap-2">
                            {getPriorityBadge(task.priority)}
                            {getStatusBadge(task.status)}
                          </div>
                        </div>
                        <p className="mb-2 text-muted">{task.description}</p>
                        
                        <div className="mb-2">
                          <small className="text-muted">
                            <strong>Assigned by:</strong> {task.assignedBy} | 
                            <strong> Assigned:</strong> {task.assignedDate} | 
                            <strong> Due:</strong> {task.dueDate}
                          </small>
                        </div>

                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <small>Progress</small>
                            <small>{task.progress}%</small>
                          </div>
                          <ProgressBar 
                            now={task.progress} 
                            variant={task.progress === 100 ? 'success' : 'primary'}
                            className="mb-2"
                          />
                        </div>

                        <div className="d-flex gap-2">
                          {task.status === 'pending' && (
                            <Button 
                              size="sm" 
                              variant="outline-primary"
                              onClick={() => updateTaskStatus(task.id, 'in-progress')}
                            >
                              🚀 Start Task
                            </Button>
                          )}
                          {task.status === 'in-progress' && (
                            <>
                              <Button 
                                size="sm" 
                                variant="outline-success"
                                onClick={() => updateTaskStatus(task.id, 'completed')}
                              >
                                ✅ Complete
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline-info"
                                onClick={() => updateProgress(task.id, Math.min(task.progress + 25, 100))}
                              >
                                📈 Update Progress
                              </Button>
                            </>
                          )}
                          <Button 
                            size="sm" 
                            variant="outline-secondary"
                            onClick={() => alert('Task details will be shown here')}
                          >
                            📋 View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Card.Body>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm mt-4 merchant-stats-card">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0 text-white">Quick Actions</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <h6 className="text-white">Task Management</h6>
                <div className="d-grid gap-2">
                  <Button variant="outline-light" size="sm">
                    📝 Create New Task
                  </Button>
                  <Button variant="outline-light" size="sm">
                    📊 Generate Report
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <h6 className="text-white">Notifications</h6>
                <div className="d-grid gap-2">
                  <Button variant="outline-light" size="sm">
                    🔔 Task Reminders
                  </Button>
                  <Button variant="outline-light" size="sm">
                    📧 Email Updates
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MerchantTasks;
