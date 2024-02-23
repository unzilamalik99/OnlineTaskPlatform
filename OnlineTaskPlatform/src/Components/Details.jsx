import React from "react";
import { useTaskContext } from "./StoreData/TaskContext";
import { useParams } from "react-router-dom";

const Details = () => {
  const { tasks } = useTaskContext();
  const { taskId } = useParams();

  if (!tasks || !tasks.data.length) {
    return (
      <div className="text-2xl pt-20 md:pt-80 text-center md:text-4xl font-bold text-gray-600">
        No tasks available....
      </div>
    );
  }

  if (tasks.isLoading) {
    return (
      <div className="text-2xl pt-20 md:pt-80 text-center md:text-4xl font-bold text-blue-500">
        Loading tasks...
      </div>
    );
  }

  if (tasks.error) {
    return (
      <div className="text-2xl pt-20 md:pt-80 text-center md:text-4xl font-bold text-red-500">
        Error loading tasks: {tasks.error.message}
      </div>
    );
  }

  const selectedTask = tasks.data.find((task) => task.id === taskId);

  if (!selectedTask) {
    return (
      <div className="text-2xl pt-20 md:pt-80 text-center md:text-4xl font-bold text-red-500">
        No task found with the specified ID
      </div>
    );
  }

  return (
    <section className="md:py-20 md:px-60 pt-10 px-7">
      <div className="bg-white rounded-lg shadow-md p-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6">
          Task Details
        </h2>

        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Title: {selectedTask.title}
          </h3>
          <p className="text-gray-600 mb-2">{selectedTask.description}</p>
          <span className="text-blue-500">
            DeadLine: {selectedTask.deadline}
          </span>
          <hr className="my-3 border-t-2 border-gray-300" />
          {selectedTask.budget && (
            <span className="text-gray-500">Budget: {selectedTask.budget}</span>
          )}
          <p className=" pt-3 text-cyan-500 font-semibold">
            Skills: {selectedTask.skills}
          </p>
          <p className="text-gray-600 pt-3">Details: {selectedTask.Details}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
