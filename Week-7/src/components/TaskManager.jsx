    import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManagerPage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskObj) => {
    const newTask = {
      id: Date.now(),
      title: taskObj.title,
      priority: taskObj.priority,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="taskManager p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
      
      <div className="bg-blue-100 border border-blue-400 p-4 rounded mb-6">
        <p className="text-lg font-semibold">
          Total Tasks: <span className="text-blue-600">{totalTasks}</span> | 
          Completed: <span className="text-green-600">{completedTasks}</span>
        </p>
      </div>

      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
}

export default TaskManagerPage;
