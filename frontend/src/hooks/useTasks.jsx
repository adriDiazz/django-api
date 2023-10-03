import { useEffect, useState } from "react";
import { createTask } from "../services/taskService";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_URL_API)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handelCreateTask = async (task) => {
    const response = await createTask(task);
    setTasks([...tasks, response]);
  };

  return { handelCreateTask, tasks, setTasks };
};
