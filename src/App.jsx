import React, { useState, useEffect } from 'react';
import { fetchTasks, addTask, editTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Button } from 'react-bootstrap';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSave = async (task) => {
    if (taskToEdit) {
      await editTask(taskToEdit._id, task);
    } else {
      await addTask(task);
    }
    loadTasks();
    setTaskToEdit(null);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <Button onClick={() => setShowForm(true)}>Add Task</Button>
      <TaskList tasks={tasks} onEdit={(task) => { setTaskToEdit(task); setShowForm(true); }} onDelete={handleDelete} />
      <TaskForm show={showForm} handleClose={() => setShowForm(false)} taskToEdit={taskToEdit} onSave={handleSave} />
    </div>
  );
};

export default App;
