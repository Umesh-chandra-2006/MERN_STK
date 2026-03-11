import React, { useState } from "react";
import { Link } from "react-router";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskObj) => {
    const newTask = {
      id: Date.now(),
      title: taskObj.title,
      priority: taskObj.priority,
      completed: false
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded text-center">
          Back Home
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
        <p className="text-blue-800 font-semibold">
          Total Tasks: {totalTasks} | Completed: {completedTasks}
        </p>
      </div>

      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
    </div>
  );
}

export default TaskManager;