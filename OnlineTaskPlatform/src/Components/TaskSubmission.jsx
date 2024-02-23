import React, { useState } from "react";
import { useTaskContext } from "./StoreData/TaskContext";
import { addTaskToDatabase } from "./StoreData/FirebaseFunctions";
import { v4 as uuidv4 } from "uuid";

const TaskSubmission = () => {
  const { addTask } = useTaskContext();
  const [taskId, setTaskId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [skills, setSkills] = useState("");
  const [errors, setErrors] = useState({});
  const [Details, setDetails] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const generateUniqueId = () => {
    return uuidv4();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!title.trim()) validationErrors.title = "Title is required";
    if (!description.trim())
      validationErrors.description = "Description is required";
    if (!budget.trim()) validationErrors.budget = "Budget is required";
    if (!deadline.trim()) validationErrors.deadline = "Deadline is required";
    if (!skills.trim()) validationErrors.skills = "Skills are required";
    if (!Details.trim()) validationErrors.Details = "Details are required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newTaskId = taskId.trim() !== "" ? taskId : generateUniqueId(); // Use entered task ID or generate one

      const newTaskData = {
        id: newTaskId,
        title,
        description,
        budget,
        deadline,
        skills,
        Details,
      };

      addTask(newTaskData);
      addTaskToDatabase(newTaskData);

      setSubmissionMessage("Task submitted successfully!");

      setTitle("");
      setDescription("");
      setBudget("");
      setDeadline("");
      setSkills("");
      setDetails("");
      setTaskId("");

      setTimeout(() => {
        setErrors({});
        setSubmissionMessage("");
      }, 5000);
    }
  };
  return (
    <div className="container px-3 shadow appearance-none border  mt-10 mx-auto p-4 md:w-[700px] md:my-20 md:py-10 py-20  rounded-xl ">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:py-5 item-center text-center ">
        Submit a Task
      </h2>

      {submissionMessage && (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
          role="alert"
        >
          <p>{submissionMessage}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-gray-700 font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-gray-700 font-bold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="budget"
              className="block mb-2 text-gray-700 font-bold"
            >
              Budget
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.budget && (
              <p className="text-red-500 text-sm">{errors.budget}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="deadline"
              className="block mb-2 text-gray-700 font-bold"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.deadline && (
              <p className="text-red-500 text-sm">{errors.deadline}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="skills"
              className="block mb-2 text-gray-700 font-bold"
            >
              Skills Required (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.skills && (
              <p className="text-red-500 text-sm">{errors.skills}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="Details"
              className="block  text-gray-700 font-bold "
            >
              Details
            </label>
            <textarea
              id="Details"
              name="Details"
              value={Details}
              onChange={(e) => setDetails(e.target.value)}
              className="shadow appearance-none border rounded p-4 py-2 px-3 md:w-[610px] w-full text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.Details && (
              <p className="text-red-500 text-sm">{errors.Details}</p>
            )}
          </div>
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 md:w-40 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskSubmission;
