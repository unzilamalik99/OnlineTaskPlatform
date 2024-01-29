import React from "react";
import { useTaskContext } from "./StoreData/TaskContext";

const Details = () => {
  const { tasks } = useTaskContext();

  if (!tasks || !tasks.length) {
    return (
      <div className="text-2xl pt-20 md:pt-80 text-center md:text-4xl font-bold">
        No tasks available....
      </div>
    );
  }

  if (tasks.isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (tasks.error) {
    return <div>Error loading tasks: {tasks.error.message}</div>;
  }
  return (
    <>
      <section className="md:pt-20 md:px-60 pt-10 px-7">
        <span className="text-2xl pt-10 text-center  md:text-4xl font-bold">
          Task Details
        </span>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg shadow-md p-4 mb-10 "
          >
            <h3 className="text-lg font-semibold md:text-2xl">
              Title: {task.title}
            </h3>

            <div className=" items-center ">
              <p className="mb-2">{task.description}</p>
              <span className="text-blue-500 pb-5">
                DeadLine: {task.deadline}
              </span>
              <hr />
              <span className="text-gray-500">Budget: {task.budget}</span>
              <p className="pt-5">Details:{task.Details}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Details;
