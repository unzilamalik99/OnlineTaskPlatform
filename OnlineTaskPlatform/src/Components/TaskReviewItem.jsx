// TaskReviewItem.jsx

import React from "react";

const TaskReviewItem = ({ rating }) => {
  return (
    <li className="mb-2">
      <p className="font-bold">{rating.user.name}</p>
      <p className="text-gray-500">{rating.rating} stars</p>
      <p>{rating.comment}</p>
    </li>
  );
};

export default TaskReviewItem;
