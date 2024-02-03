import React from "react";
import { useTaskContext } from "./StoreData/TaskContext";
import PopularServices from "./PopularServices";
import { Link } from "react-router-dom";

const TaskListing = () => {
  const { tasks } = useTaskContext();

  if (!tasks || !tasks.length) {
    return (
      <>
        <PopularServices className="" />
        <div className="text-2xl text-center gap-20 md:text-3xl font-bold my-20  md:my-40">
          No tasks available....
        </div>
      </>
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
      <PopularServices />
      <section className="md:py-20 md:px-20 pt-10 px-7">
        <span className="text-2xl pt-10 text-center md:text-4xl font-bold">
          TaskListing
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-10 pt-5 md:pt-10">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 key={`title-${task.id}`} className="text-lg font-semibold">
                {task.title}
              </h3>
              <p key={`description-${task.id}`} className="mb-2">
                {task.description}
              </p>
              <div className="flex items-center justify-between">
                <span key={`budget-${task.id}`} className="text-gray-500">
                  Budget: {task.budget}$
                </span>
                <span
                  key={`deadline-${task.id}`}
                  className="text-blue-500 pb-5"
                >
                  {task.deadline}
                </span>
              </div>
              {/* Display Rating and Comment */}
              {task.rating && task.comment && (
                <div className="mt-2">
                  <p key={`rating-${task.id}`} className="text-gray-700">
                    Rating: {task.rating} stars
                  </p>
                  <p key={`comment-${task.id}`} className="text-gray-700">
                    Comment: {task.comment}
                  </p>
                </div>
              )}
              {/* Add Link to Details Page */}
              <Link to={`/Details`} key={`view-details-${task.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  View Details
                </button>
              </Link>
              {/* Add Review Button */}
              <Link
                to={`/TaskReview`}
                className="pl-5"
                // key={`review-link-${task.id}`}
              >
                {/* Pass task.id to TaskReview route */}
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2"
                  key={`review-button-${task.id}`}
                >
                  Submit Review
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TaskListing;
