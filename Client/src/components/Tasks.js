import Task from "./Task";
import "../App.css";

const Tasks = ({
  tasks,
  handleCheck,
  activateEditTask,
  replaceTask,
  deleteTask,
}) => {
  return (
    <div>
      <h2>Incomplete</h2>
      <ul>
        {tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <Task
              task={task}
              key={task.id}
              handleCheck={handleCheck}
              activateEditTask={activateEditTask}
              replaceTask={replaceTask}
              deleteTask={deleteTask}
            />
          ))}
      </ul>
      <h2>Complete</h2>
      <ul>
        {tasks
          .filter((task) => task.completed === true)
          .map((task) => (
            <Task
              task={task}
              key={task.id}
              handleCheck={handleCheck}
              activateEditTask={activateEditTask}
              replaceTask={replaceTask}
              deleteTask={deleteTask}
            />
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
