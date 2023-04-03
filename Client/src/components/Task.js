const Task = ({ task, handleCheck, activateEditTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={task.completed}
        onChange={() => handleCheck(task.id)}
      />
      <h3>{task.text}</h3>
      <p>{task.category}</p>
      <button onClick={() => activateEditTask(task.id)}>...</button>
    </li>
  );
};
export default Task;
