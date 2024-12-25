import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const isOverdue = (dueDate) => {
    const today = new Date().toISOString().split('T')[0];
    return new Date(dueDate) < new Date(today);
  };

  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item
          key={task._id}
          className={`d-flex justify-content-between ${
            isOverdue(task.dueDate) ? 'bg-danger text-white' : ''
          }`}
        >
          <div>
            <h5>{task.name}</h5>
            <p>{task.description}</p>
            <small>
              Due: {task.dueDate} | Status: {task.status} | Priority: {task.priority}
            </small>
          </div>
          <div>
            <Button variant="warning" onClick={() => onEdit(task)}>
              Edit
            </Button>{' '}
            <Button variant="danger" onClick={() => onDelete(task._id)}>
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
