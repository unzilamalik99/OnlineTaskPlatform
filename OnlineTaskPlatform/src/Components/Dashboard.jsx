import React, { useState, useEffect } from "react";
import ResponsiveSidebar from "./ResponsiveSidebar";

const Dashboard = () => {
  const [taskSummary, setTaskSummary] = useState({
    totalTasks: 0,
    completedTasks: 0,
    overdueTasks: 0,
  });

  const [taskList, setTaskList] = useState([]);
  const [projectOverview, setProjectOverview] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    // Simulate fetching task summary data
    setTimeout(() => {
      setTaskSummary({
        totalTasks: 20,
        completedTasks: 12,
        overdueTasks: 3,
      });
    }, 1000);

    // Simulate fetching task list data
    setTimeout(() => {
      setTaskList([
        { id: 1, title: "Task 1", status: "Completed" },
        { id: 2, title: "Task 2", status: "In Progress" },
        { id: 3, title: "Task 3", status: "Pending" },
        // Add more tasks as needed
      ]);
    }, 1500);

    // Simulate fetching project overview data
    setTimeout(() => {
      setProjectOverview([
        { id: 1, name: "Project A", tasks: 8, completion: "60%" },
        { id: 2, name: "Project B", tasks: 5, completion: "40%" },
        // Add more projects as needed
      ]);
    }, 2000);
  }, []);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <ResponsiveSidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        {/* Task Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Task Summary</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="md:text-lg font-semibold">Total Tasks</p>
              <p className="text-3xl font-bold text-blue-500">
                {taskSummary.totalTasks}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="md:text-lg font-semibold">Completed Tasks</p>
              <p className="text-3xl font-bold text-green-500">
                {taskSummary.completedTasks}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="md:text-lg font-semibold">Overdue Tasks</p>
              <p className="text-3xl font-bold text-red-500">
                {taskSummary.overdueTasks}
              </p>
            </div>
          </div>
        </section>

        {/* Task List */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Task List</h2>
          <ul>
            {taskList.map((task) => (
              <li key={task.id} className="mb-2">
                <span className="font-semibold">{task.title}</span>{" "}
                <span className={`text-sm ${getStatusColor(task.status)}`}>
                  ({task.status})
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Project Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <ul>
            {projectOverview.map((project) => (
              <li key={project.id} className="mb-2">
                <span className="font-semibold">{project.name}</span>{" "}
                <span className="text-sm">{project.tasks} tasks</span>{" "}
                <span className="text-sm text-green-500">
                  ({project.completion})
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};
const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "text-green-500";
    case "In Progress":
      return "text-blue-500";
    case "Pending":
      return "text-yellow-500";
    default:
      return "text-gray-500";
  }
};

export default Dashboard;
