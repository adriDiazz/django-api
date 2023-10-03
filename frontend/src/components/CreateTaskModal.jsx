import { useState } from "react";
import styles from "../pages/HomePage.module.css";

import { useTasks } from "../hooks/useTasks";

export const CreateTaskModal = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    done: false,
  });

  const { handelCreateTask } = useTasks();

  return (
    <div className={styles.modalWrapper}>
      <h1>Creando una tarea</h1>
      <div className={styles.inputsWrapper}>
        <input
          type="text"
          placeholder="Titulo"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          placeholder="Descripcion"
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          <span
            style={{
              color: "#000",
            }}
          >
            Done
          </span>
          <input
            type="checkbox"
            value={formData.done}
            onChange={(e) =>
              setFormData({ ...formData, done: e.target.checked })
            }
          ></input>
        </div>
        <div className="">
          <button onClick={() => handelCreateTask(formData)}>Crear</button>
        </div>
      </div>
    </div>
  );
};
