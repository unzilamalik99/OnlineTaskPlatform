import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editedTask, updateTask }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: "",
    type: "",
  });

  useEffect(() => {
    if (editedTask) {
      setTask(editedTask);
    }
  }, [editedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTask) {
      updateTask(task);
    } else {
      // Generate a unique ID for the new task
      const newTask = {
        ...task,
        id: new Date().getTime().toString(),
        completed: false,
      };
      addTask(newTask);
    }
    setTask({ name: "", description: "", dueDate: "", priority: "", type: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4 m-4 md:px-40">
      <h2 className="text-xl font-semibold mb-2">Add/Edit Task</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={task.type}
          onChange={(e) => setTask({ ...task, type: e.target.value })}
          className="border p-2"
        >
          <option value="">Select Task Type</option>
          <option value="data-entry">Data Entry</option>
          <option value="writing">Writing</option>
          <option value="Translation">Translation</option>
          <option value="Transcription">Transcription</option>
          <option value="Social media management">
            Social media management
          </option>
          <option value="Customer service">Customer service</option>
          <option value=" Graphic design"> Graphic design</option>
          <option value="Web development">Web development</option>
          <option value="Software development">Software development</option>

          {/* ... (other options) */}
        </select>

        <input
          type="text"
          placeholder="Task name"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className="border p-2"
          required
        />
      </div>

      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        className="border p-2 w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="border p-2"
        />

        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="border p-2"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        {editedTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
