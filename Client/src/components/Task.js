import { Button } from "react-bootstrap";
import { useState } from "react";
import EditTask from "./EditTask";

const Task = ({
  task,
  handleCheck,
  activateEditTask,
  replaceTask,
  deleteTask,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <li>
      <div className="task_TextWrapper">
        <h3>{task.text}</h3>
        <p>{task.category}</p>
      </div>
      <div className="edit_CheckWrapper">
        <Button
          variant="primary"
          onClick={() => {
            activateEditTask(task.id);
            handleShowModal();
          }}
        >
          Edit Task
        </Button>
        <EditTask
          editTask={[task]}
          replaceTask={replaceTask}
          deleteTask={deleteTask}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={task.completed}
          onChange={() => handleCheck(task.id)}
        />
      </div>
    </li>
  );
};

export default Task;
