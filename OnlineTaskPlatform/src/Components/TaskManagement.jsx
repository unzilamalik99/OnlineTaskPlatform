import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks are updated
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditedTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditedTask(null);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filterTasks = () => {
    return tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(filter.toLowerCase()) ||
        task.description.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className="  container mx-auto md:pt-20 pt-20 py-10 px-1 ">
      <h1 className="text-3xl font-semibold item-center text-center mb-4">
        Task Management
      </h1>
      <TaskForm
        addTask={addTask}
        editedTask={editedTask}
        updateTask={updateTask}
      />
      <input
        type="text"
        placeholder="Search tasks..."
        className="border p-2 mb-4 mx-4 md:mx-60"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <TaskList
        tasks={filterTasks()}
        editTask={editTask}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskManagement;
