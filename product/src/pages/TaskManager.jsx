import React from 'react';
import { Link } from 'react-router-dom';
import TaskManagerPage from '../components/TaskManager';

function TaskManager() {
  return (
    <div>
      <div className="flex justify-between items-center bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
            Back Home
          </button>
        </Link>
      </div>
      <div className="taskManagerPage">
        <TaskManagerPage />
      </div>
    </div>
  );
}

export default TaskManager;