import React, { useState } from "react";

const TaskReviewForm = ({ taskId, onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReview(taskId, rating, comment);
    // Reset form after submission
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label
          htmlFor={`rating-${taskId}`}
          className="block mb-1 text-gray-700"
        >
          Rating (1-5 stars):
        </label>
        <select
          id={`rating-${taskId}`}
          name={`rating-${taskId}`}
          value={rating}
          onChange={(e) => handleRatingChange(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
      <div className="mb-2">
        <label
          htmlFor={`comment-${taskId}`}
          className="block mb-1 text-gray-700"
        >
          Comment:
        </label>
        <textarea
          id={`comment-${taskId}`}
          name={`comment-${taskId}`}
          value={comment}
          onChange={(e) => handleCommentChange(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit Review
      </button>
    </form>
  );
};

export default TaskReviewForm;
