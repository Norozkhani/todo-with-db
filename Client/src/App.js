import { useState, useMemo } from "react";
import DateTime from "./components/Date";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Particle from "./components/Particle";
import Task from "./components/Task";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { Container, TabContent } from "react-bootstrap";

function App() {
  const [activeEditTask, setActiveEditTask] = useState(null);
  const memoizedParticle = useMemo(() => <Particle />, []);
  const getTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    console.log(res.status, data);
    setTasks(data);
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    const newTasks = [...tasks, data];
    setTasks(newTasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const [tasks, setTasks] = useState([]);

  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const handleCheck = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const activateEditTask = (id) => {
    setActiveEditTask(id);
  };

  const replaceTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div className="App_Wrapper d-flex align-items-center justify-content-center">
      <div className="App">
        <section>
          <DateTime />
          <AddTask taskLen={tasks.length} createTask={addTask} />
          <h2>Incomplete</h2>
          <ul className="task-list-wrapper">
            {incompleteTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleCheck={handleCheck}
                activateEditTask={activateEditTask}
                replaceTask={replaceTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
          <h2>Completed</h2>
          <ul className="task-list-wrapper">
            {completedTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleCheck={handleCheck}
                activateEditTask={activateEditTask}
                replaceTask={replaceTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>

          <EditTask
            editTask={
              activeEditTask
                ? tasks.filter((task) => task.id === activeEditTask)
                : []
            }
            replaceTask={replaceTask}
            deleteTask={deleteTask}
            onHide={() => setActiveEditTask(null)}
          />
        </section>
        <div className="particlesContainer">{memoizedParticle}</div>
      </div>
    </div>
  );
}
export default App;
