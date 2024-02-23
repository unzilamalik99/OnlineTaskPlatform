import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  listenToTasks,
  addTaskToDatabase,
  deleteTaskFromDatabase,
  updateTaskRatingAndCommentInDatabase,
} from "./FirebaseFunctions";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const updateTasks = (newTasks) => {
      setTasks({ data: newTasks, isLoading: false, error: null });
    };

    listenToTasks(updateTasks);

    return () => {
      // Clean up code if needed
    };
  }, []);

  const addTask = async (taskData) => {
    try {
      const newTask = {
        id: uuidv4(),
        ...taskData,
      };

      setTasks((prevTasks) => ({
        ...prevTasks,
        data: [...(prevTasks.data || []), newTask],
      }));

      await addTaskToDatabase(newTask);

      console.log("Task added successfully to the database.");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTaskFromDatabase(taskId);
      setTasks((prevTasks) => ({
        ...prevTasks,
        data: Array.isArray(prevTasks.data)
          ? prevTasks.data.filter((task) => task.id !== taskId)
          : [],
      }));
      console.log(
        `Task with ID ${taskId} removed successfully from the database.`
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTaskRatingAndComment = async (taskId, rating, comment) => {
    try {
      await updateTaskRatingAndCommentInDatabase(taskId, rating, comment);
      setTasks((prevTasks) => ({
        ...prevTasks,
        data: prevTasks.data.map((task) =>
          task.id === taskId ? { ...task, rating, comment } : task
        ),
      }));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        handleDelete,
        updateTaskRatingAndComment,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
