import axios from 'axios';

const API_URL = 'https://robotspace.onrender.com'; // Replace with your backend URL

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const editTask = async (id, updatedTask) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error editing task:', error);
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
