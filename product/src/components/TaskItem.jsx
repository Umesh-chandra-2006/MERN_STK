import React from "react";

function TaskItem({ task, onDelete, onToggle }) {
  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800"
  };

  return (
    <div className="bg-white p-4 rounded border-l-4 border-blue-500 flex justify-between items-center shadow-sm hover:shadow-md transition">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-5 h-5 cursor-pointer"
          />
          <p className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </p>
        </div>
        <span className={`inline-block mt-2 px-3 py-1 rounded text-sm font-semibold ${priorityColors[task.priority]}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
