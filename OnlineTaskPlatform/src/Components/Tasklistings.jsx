import React, { useEffect, useState } from "react";
import { useTaskContext } from "./StoreData/TaskContext";
import PopularServices from "./PopularServices";
import { Link } from "react-router-dom";
import { deleteTaskFromDatabase } from "./StoreData/FirebaseFunctions";
import { FcViewDetails } from "react-icons/fc";
import { IoMdSend } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
const TaskListing = () => {
  const uniqueKeys = new Set();
  const { tasks } = useTaskContext();
  const { updateTasks } = useTaskContext();
  const [alert, setAlert] = useState(null);

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTaskFromDatabase(String(taskId), updateTasks);
      setAlert({
        type: "success",
        message: `Task with ID ${taskId} deleted successfully.`,
      });
    } catch (error) {
      setAlert({
        type: "error",
        message: `Error deleting task with ID ${taskId}: ${error.message}`,
      });
    }
  };

  useEffect(() => {
    console.log("Tasks:", tasks);
    console.log("Unique Keys:", uniqueKeys);
  }, [uniqueKeys]);

  useEffect(() => {
    // Clear the alert after 3 seconds
    const timeout = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  if (!tasks?.data?.length) {
    return (
      <>
        <PopularServices className="mb-10" />
        <div className="text-center my-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Task Listing
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mt-4">
            No tasks available...
          </p>
        </div>
      </>
    );
  }

  if (tasks.isLoading) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl md:text-2xl text-gray-800">Loading tasks...</p>
      </div>
    );
  }

  if (tasks.error) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl md:text-2xl text-red-600">
          Error loading tasks: {tasks.error.message}
        </p>
      </div>
    );
  }

  return (
    <>
      <PopularServices />
      <section className="md:py-20 md:px-20 pt-10 px-7 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Task Listing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-10 pt-5 md:pt-10">
          {tasks.data.map((task, index) => {
            const key = task.id;

            if (uniqueKeys.has(key)) {
              console.warn(`Duplicate key detected: ${key}`);
              return null;
            }

            uniqueKeys.add(key);

            if (!task.budget && !task.deadline) {
              return null;
            }

            return (
              <div
                key={key}
                className="bg-blue-100 rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105"
              >
                <h3 className="font-semibold text-xl md:text-2xl text-blue-800 mb-2">
                  {task.title || task.Details}
                </h3>
                <p className="text-gray-700 mb-4">{task.description}</p>
                <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                  <div className="flex items-center flex-wrap">
                    <span className="text-gray-700 mr-4 mb-2 md:mb-0">
                      Budget:{" "}
                      {task.budget ? `$${task.budget}` : "Not specified"}
                    </span>
                    <span className="text-blue-600 mr-4 mb-2 md:mb-0">
                      Deadline: {task.deadline || "Not specified"}
                    </span>
                    <span className="text-blue-600 mr-4 mb-2 md:mb-0">
                      Rating: {task.rating || "Not specified"}
                    </span>
                    <span className="text-blue-600">
                      Comment: {task.comment || "Not specified"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    to={`/Details/${task.id}`}
                    className="bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2 flex flex-row items-center gap-2"
                  >
                    View
                    <FcViewDetails className="text-xl" />
                  </Link>

                  <Link
                    to={`/TaskReview/${task.id}`}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-2 flex flex-row items-center gap-2"
                  >
                    Review
                    <IoMdSend className="text-xl" />
                  </Link>

                  <button
                    onClick={() => handleDeleteTask(task.id.toString())}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-2 flex flex-row items-center gap-2"
                  >
                    Task
                    <MdOutlineDelete className="text-xl" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {alert && (
        <div
          className={`fixed bottom-0 right-0 mb-4 mr-4 p-4 bg-${alert.type}-200 text-${alert.type}-800 rounded-md`}
        >
          {alert.message}
        </div>
      )}
    </>
  );
};

export default TaskListing;
