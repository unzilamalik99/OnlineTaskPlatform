import {
  ref,
  onValue,
  push,
  update,
  get,
  child,
  remove,
} from "firebase/database";
import { realtimeDb } from "../../Firebase/FirebaseConfig";

const listenToTasks = (callback) => {
  const tasksRef = ref(realtimeDb, "tasks");
  onValue(tasksRef, (snapshot) => {
    const tasksData = snapshot.val();
    const tasksArray = tasksData ? Object.values(tasksData) : [];
    callback(tasksArray);
  });
};

const addTaskToDatabase = (newTask) => {
  const tasksRef = ref(realtimeDb, "tasks");
  push(tasksRef, newTask);
};

const updateTaskRatingAndCommentInDatabase = (taskId, rating, comment) => {
  const taskRef = ref(realtimeDb, `tasks/${taskId}`);
  update(taskRef, { rating, comment });
};

const deleteTaskFromDatabase = async (taskId, updateLocalState) => {
  console.log("Deleting task with ID:", taskId);

  const tasksRef = ref(realtimeDb, "tasks");

  try {
    // Remove the task
    await remove(child(tasksRef, taskId));

    // Wait for a short time to allow the removal to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if the task still exists after removal
    const snapshotAfter = await get(child(tasksRef, taskId));
    console.log("Snapshot after deletion:", snapshotAfter.val());

    if (!snapshotAfter.exists()) {
      console.log(
        `Task with ID ${taskId} removed successfully from the database.`
      );

      if (updateLocalState) {
        updateLocalState((prevTasks) => ({
          ...prevTasks,
          data: (prevTasks.data || []).filter((task) => task.id !== taskId),
        }));
      }
    } else {
      console.log(
        `Task with ID ${taskId} still found in the database after deletion.`
      );
    }
  } catch (error) {
    console.error(`Error removing task with ID ${taskId}:`, error);
    throw error;
  }
};

export {
  listenToTasks,
  addTaskToDatabase,
  updateTaskRatingAndCommentInDatabase,
  deleteTaskFromDatabase,
};
