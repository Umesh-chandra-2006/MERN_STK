import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded text-center">
        <p className="text-gray-600 text-lg">No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TaskList;
