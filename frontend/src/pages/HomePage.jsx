import { useState } from "react";
import styles from "./HomePage.module.css";
import ModalComponent from "../components/ModalComponent";
import { CreateTaskModal } from "../components/CreateTaskModal";
import { useTasks } from "../hooks/useTasks";

const HomePage = () => {
  const [opened, setOpened] = useState(false);
  const { tasks } = useTasks();

  return (
    <div className={styles.wrapper}>
      <h1>Tasks</h1>
      <ul className={styles.tasksWrapper}>
        {tasks.map(({ id, title, desc, done }) => {
          return (
            <>
              <li key={id}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <input type="checkbox" checked={done} />
              </li>
            </>
          );
        })}
      </ul>
      <ModalComponent opened={opened} setOpened={setOpened}>
        <CreateTaskModal />
      </ModalComponent>
      <button onClick={() => setOpened(true)}>Crear tarea</button>
    </div>
  );
};

export default HomePage;
