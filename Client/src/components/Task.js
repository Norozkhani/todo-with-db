const Task = ({ task, handleCheck, activateEditTask }) => {
  return (
    <li>
      <div className="task_TextWrapper">
        <h3>{task.text}</h3>
        <p>{task.category}</p>
      </div>
      <div className="edit_CheckWrapper">
        <button
          className=" btn btn-primary"
          onClick={() => activateEditTask(task.id)}
        >
          Edit
        </button>
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
