import { Button } from "react-bootstrap";
import "../App.css";

const Task = ({ task, handleCheck, activateEditTask }) => {
  return (
    <li className="task-wrapper d-flex justify-content-center align">
      <div className="task_TextWrapper">
        <h4>{task.title}</h4>
        <p>{task.category}</p>
      </div>
      <div className="edit_CheckWrapper">
        <Button onClick={() => activateEditTask(task.id)}>Edit</Button>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={task.completed}
          onChange={() => handleCheck(task)}
        />
      </div>
    </li>
  );
};

export default Task;
