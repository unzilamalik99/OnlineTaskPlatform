import React from "react";

const TaskList = ({ tasks, editTask, completeTask, deleteTask }) => {
  return (
    <ul className="list-none p-4 px-4">
      {tasks.map((task) => (
        <li key={task.id} className="mb-4 bg-white rounded-md p-4 shadow-md">
          <div className="flex justify-between items-center">
            <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
              {task.name}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => editTask(task.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => completeTask(task.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Complete
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
          {task.type && (
            <p className="text-gray-500 mt-2">
              Type: {task.type.charAt(0).toUpperCase() + task.type.slice(1)}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
