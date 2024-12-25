# Task Tracker Application (MERN Stack)

This project is a Task Tracker application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app lets users manage tasks by adding, editing, deleting, and viewing tasks dynamically.

---

## Features

### Frontend
- **Task Listing**: Displays a list of tasks from the database.
- **Add Task**: Add new tasks with details like name, description, due date, status, and priority.
- **Edit Task**: Modify existing tasks using a modal form.
- **Delete Task**: Remove tasks with a confirmation step.
- **Status Filter**: Filter tasks by their status (Pending, In Progress, Completed).
- **Overdue Highlighting**: Tasks overdue are shown in red for better visibility.
- **Responsive Design**: The app works seamlessly on desktop and mobile devices.

### Backend
- **API Endpoints**:
  - `GET /tasks`: Fetch all tasks.
  - `POST /tasks`: Add a new task.
  - `PATCH /tasks/:id`: Update a task.
  - `DELETE /tasks/:id`: Delete a task.
- **Database**: MongoDB stores tasks with fields for name, description, due date, status, and priority.

---

## Technologies Used

### Frontend
- React (with Vite)
- React-Bootstrap for styling
- Axios for API communication

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

How I Created This Project :

This project is a Task Tracker application built using the MERN Stack (MongoDB, Express.js, React, Node.js). The goal was to create an application that allows users to add, edit, delete, and manage tasks, with an intuitive and responsive design. Here's how I approached building this project:

1. Backend (Node.js with Express.js)
Set up the Backend:

I started by setting up a Node.js environment with Express.js to handle the backend logic.
I created the necessary API endpoints for interacting with the tasks:
GET /tasks: Fetch all tasks from the database.
POST /tasks: Add a new task to the database.
PATCH /tasks/:id: Update an existing task based on the id.
DELETE /tasks/:id: Delete a task based on the id.
Database:

For the database, I used MongoDB to store the tasks. The task schema was designed to include fields such as:
name: Name of the task.
description: A detailed description of the task.
dueDate: Deadline for the task.
status: Status of the task (e.g., Pending, In Progress, Completed).
priority: Task priority (Low, Medium, High).
Environment Configuration:

I created an .env file to securely store the MongoDB URI and other environment variables.

2. Frontend (React with Vite)
Set up the Frontend:

I created the frontend using React and Vite, which provided fast build times and a smooth development experience.
I used React-Bootstrap to help with styling and create responsive, mobile-friendly UI components like buttons, forms, and modals.
State Management:

To manage the state of tasks, I used React's useState and useEffect hooks for loading, adding, updating, and deleting tasks.
Task Management:

I created a Task List that fetches all tasks from the backend and displays them.
I implemented Add Task, Edit Task, and Delete Task functionality using modals, allowing the user to interact with the task data.
I also added a Status Filter to allow users to filter tasks by their current status (Pending, In Progress, Completed).
Responsive Design:

I made sure the app is mobile-responsive by using Bootstrap grid system and flexbox for layout.
The app is fully functional on both desktop and mobile devices, ensuring a seamless user experience across different screen sizes.

3. Task Highlighting (Overdue Tasks)
I implemented logic to automatically highlight overdue tasks in red. This feature checks the task’s due date and compares it with the current date. If the task is overdue, it is styled with a red color.

4. Form Input Handling:
After a task is added or edited, I implemented logic to clear the form inputs automatically to improve user experience.
When the Save button is clicked, the form fields are reset to their default values, and the new or updated task is displayed.

5. Deployment
Backend Deployment:

I deployed the backend using Render. After connecting the repository, I added the necessary environment variables (e.g., MONGO_URI and PORT) and deployed the backend service.
Frontend Deployment:

The frontend was deployed using Vercel. I connected the frontend repository to the platform, configured the base URL of the backend API, and deployed it.

Conclusion
The project provides a full-stack solution for task management, offering features such as task creation, modification, deletion, filtering, and overdue task highlighting. The responsive design ensures a great experience across devices, and the project is fully functional both locally and in production.