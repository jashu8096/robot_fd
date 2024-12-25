import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, taskToEdit, onSave }) => {
  const initialTaskState = {
    name: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low',
  };

  const [task, setTask] = useState(initialTaskState);

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask(initialTaskState);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask(initialTaskState); // Clear the form inputs
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter task description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={task.status}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskForm;
