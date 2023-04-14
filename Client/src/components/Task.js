import { useState } from "react";
import { Button } from "react-bootstrap";
import EditTask from "./EditTask";
import "../App.css";

const Task = ({
  task,
  handleCheck,
  activateEditTask,
  replaceTask,
  deleteTask,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = () => {
    activateEditTask(task.id);
    setShowEditModal(true);
  };

  return (
    <li>
      <div className="task_TextWrapper">
        <h3>{task.text}</h3>
        <p>{task.category}</p>
      </div>
      <div className="edit_CheckWrapper">
        <Button onClick={handleShowEditModal}>Edit</Button>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={task.completed}
          onChange={() => handleCheck(task.id)}
        />
      </div>
      <EditTask
        editTask={[task]}
        replaceTask={replaceTask}
        deleteTask={deleteTask}
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        setShow={setShowEditModal}
      />
    </li>
  );
};

export default Task;
