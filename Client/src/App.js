import { useState, useMemo } from "react";
import DateTime from "./components/Date";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Particle from "./components/Particle";
import Task from "./components/Task";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function App() {
  const [activeEditTask, setActiveEditTask] = useState(null);
  const memoizedParticle = useMemo(() => <Particle />, []);
  // Get tasks
  const getTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    console.log(res.status, data);
    setTasks(data);
  };

  //add task
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

  // Complete/unComplete Tasks
  const handleCheck = async (task) => {
    task.completed = !task.completed;
    await replaceTask(task);
  };

  // edit tasks
  const replaceTask = async (task) => {
    try {
      await fetch(`http://localhost:3000/task/${task.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(task),
      });
    } catch (error) {
      console.error(error);
    }
    const i = tasks.findIndex((t) => t.id === task.id);

    tasks[i] = task;
    setTasks([...tasks]);
  };
  // delete tasks
  const deleteTask = async (task) => {
    try {
      await fetch(`http://localhost:3000/task/${task.id}`, {
        method: "DELETE",
      });
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    } catch (error) {
      console.error(error);
    }
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
                activateEditTask={setActiveEditTask}
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
                activateEditTask={setActiveEditTask}
                replaceTask={replaceTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>

          {activeEditTask && (
            <EditTask
              editTask={tasks.find((task) => task.id === activeEditTask)}
              replaceTask={replaceTask}
              deleteTask={deleteTask}
              setActivateEditTask={setActiveEditTask}
            />
          )}
        </section>
        <div className="particlesContainer">{memoizedParticle}</div>
      </div>
    </div>
  );
}
export default App;
