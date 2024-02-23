import React from "react";
import { useTaskContext } from "./StoreData/TaskContext";
import TaskReviewForm from "./TaskReviewForm";
import { useParams } from "react-router-dom";

const TaskReview = () => {
  const { tasks, updateTaskRatingAndComment } = useTaskContext();
  const { taskId } = useParams();

  // Find the task with the specified taskId
  const selectedTask = tasks.data.find((task) => task.id === taskId);

  if (!selectedTask) {
    return <div>No task found with the specified ID</div>;
  }

  return (
    <section className="my-20 mx-60 ">
      <span className="text-3xl md:text-4xl font-bold block mb-8 text-blue-800 tex-center items-center">
        Task Review
      </span>
      <div className=" shadow-md rounded p-4 md:mx-auto md:mt-8 md:w-96 lg:w-[800px] bg-slate-100">
        <div key={selectedTask.id}>
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
            Title: {selectedTask.title}
          </h2>
          <p className="text-gray-600 mb-4">{selectedTask.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-indigo-500">Budget:</p>
              <p className="text-indigo-700">{selectedTask.budget}$</p>
            </div>
            <div>
              <p className="font-bold text-green-500">Deadline:</p>
              <p className="text-green-700">{selectedTask.deadline}</p>
            </div>
            <div>
              <p className="font-bold text-purple-500">Skills:</p>
              <p className="text-purple-700">{selectedTask.skills}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-teal-500">Reviews</h3>

            {selectedTask.ratings && selectedTask.ratings.length > 0 ? (
              <ul>
                {selectedTask.ratings.map((rating, index) => (
                  <li key={index} className="mb-2">
                    <p className="font-bold text-gray-800">
                      {rating.user.name}
                    </p>
                    <p className="text-gray-600">{rating.rating} stars</p>
                    <p className="text-blue-700">{rating.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}

            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2 text-orange-500">
                Submit Your Review
              </h3>
              <TaskReviewForm
                taskId={selectedTask.id}
                onSubmitReview={updateTaskRatingAndComment}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskReview;
