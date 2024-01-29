// TaskReview.jsx

import React from "react";
import { useTaskContext } from "./StoreData/TaskContext";
import TaskReviewForm from "./TaskReviewForm";

const TaskReview = () => {
  const { tasks, updateTaskRatingAndComment } = useTaskContext();

  return (
    <section className="mt-20 mx-5">
      <span className="text-2xl md:px-[300px] mx-20 md:text-3xl font-bold ">
        Task Review
      </span>
      <div className="bg-white shadow-md rounded p-4 md:mx-[200px] md:mt-20 md:w-[800px]">
        {tasks.map((task) => (
          <div key={task.id}>
            <h2 className="text-lg font-bold mb-2">Title: {task.title}</h2>
            <p className="text-gray-500 mb-4">{task.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Budget:</p>
                <p>{task.budget}$</p>
              </div>
              <div>
                <p className="font-bold">Deadline:</p>
                <p>{task.deadline}</p>
              </div>
              <div>
                <p className="font-bold">Skills:</p>
                <p>{task.skills}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-bold mb-2">Reviews</h3>

              {task.ratings && task.ratings.length > 0 ? (
                <ul>
                  {task.ratings.map((rating) => (
                    <li key={rating.id} className="mb-2">
                      <p className="font-bold">{...rating.user.name}</p>
                      <p className="text-gray-500">{...rating.rating} stars</p>
                      <p>{...rating.comment}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews yet.</p>
              )}

              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Submit Your Review</h3>
                <TaskReviewForm
                  taskId={task.id}
                  onSubmitReview={updateTaskRatingAndComment}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskReview;
