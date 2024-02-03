// AdminPanel.js
import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [tasksForApproval, setTasksForApproval] = useState([]);
  const [assigneeId, setAssigneeId] = useState("");

  useEffect(() => {
    // Simulate fetching tasks from an API
    const fetchTasks = async () => {
      try {
        // Simulated API call
        const simulatedTasks = [
          { id: 1, name: "Task 1", description: "Description for Task 1" },
          { id: 2, name: "Task 2", description: "Description for Task 2" },
          // Add more simulated tasks as needed
        ];

        setTasksForApproval(simulatedTasks);
      } catch (error) {
        console.error("Error fetching tasks for approval:", error.message);
      }
    };

    fetchTasks();
  }, []);

  const handleApproveTask = async (taskId) => {
    // Simulate approving a task
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTasksForApproval((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } catch (error) {
      console.error("Error approving task:", error.message);
    }
  };

  const handleAssignTask = async (taskId) => {
    // Simulate assigning a task
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTasksForApproval((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } catch (error) {
      console.error("Error assigning task:", error.message);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Task Approval Panel
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasksForApproval.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-4">{task.name}</h3>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleApproveTask(task.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Approve
              </button>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Assignee ID"
                  value={assigneeId}
                  onChange={(e) => setAssigneeId(e.target.value)}
                  className="border p-2 rounded-md"
                />
                <button
                  onClick={() => handleAssignTask(task.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Assign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
