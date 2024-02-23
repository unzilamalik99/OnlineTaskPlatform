import axios from "axios";
import { useState, useEffect } from "react";

const OnlineWorkPlatform = () => {
  const [tasks, setTasks] = useState([]);
  const [userWork, setUserWork] = useState("");

  useEffect(() => {
    // Fetch tasks from the backend when the component mounts
    axios.get("/Tasklistings").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const submitWork = (taskId) => {
    // Assume the backend expects work submission data in a specific format
    const workData = {
      taskId,
      userWork,
    };

    // Send the work submission to the backend
    axios.post("/work-submission", workData).then((response) => {
      // Handle success, e.g., show a success message
      console.log("Work submitted successfully!");

      // Refresh the task list after submission
      axios.get("/Tasklistings").then((response) => {
        setTasks(response.data);
      });

      // Clear the userWork state
      setUserWork("");
    });
  };

  const handleUserWorkChange = (e) => {
    setUserWork(e.target.value);
  };

  return (
    <div>
      <h1>Online Work Platform</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => submitWork(task.id)}>Submit Work</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Submit Your Work</h2>
        <textarea
          value={userWork}
          onChange={handleUserWorkChange}
          placeholder="Enter your work here..."
        />
        {/* Corrected onClick handler without referencing task.id */}
        <button onClick={() => submitWork()}>Submit Work</button>
      </div>
    </div>
  );
};

export default OnlineWorkPlatform;
