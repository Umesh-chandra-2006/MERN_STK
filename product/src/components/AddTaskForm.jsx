import React, { useState } from "react";

function AddTaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: "",
    priority: "medium"
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    onAddTask(formData);

    // Clear form
    setFormData({
      title: "",
      priority: "medium"
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded border-2 border-gray-300 mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Task Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
