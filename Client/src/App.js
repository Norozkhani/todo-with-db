import { useState } from "react";
import DateTime from "./components/Date";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Task from "./components/Task";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [activeEditTask, setActiveEditTask] = useState(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Upload 1099-R to TurboTax",
      category: "Finance",
      completed: false,
    },
    {
      id: 2,
      text: "Print parking passes",
      category: "Finance",
      completed: false,
    },
    {
      id: 3,
      text: "Submit 2019 tax return",
      category: "Wedding",
      completed: false,
    },
    {
      id: 4,
      text: "Sign contract, send back",
      category: "Freelance",
      completed: false,
    },
    {
      id: 5,
      text: "Hand sanitizer",
      category: "Shopping List",
      completed: false,
    },
    {
      id: 6,
      text: "Check on FedEx Order",
      category: "Freelance",
      completed: true,
    },
    {
      id: 7,
      text: "Look at new plugins",
      category: "Freelance",
      completed: true,
    },
    {
      id: 8,
      text: "Respond to catering company",
      category: "Freelance",
      completed: true,
    },
    {
      id: 9,
      text: "Reschedule morning coffee",
      category: "Freelance",
      completed: true,
    },
    {
      id: 10,
      text: "Check the latest on Community",
      category: "Freelance",
      completed: true,
    },
  ]);
  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const handleCheck = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const createTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
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
    <div className="App_Wrapper">
      <div className="App">
        <section>
          <DateTime />
          <AddTask taskLen={tasks.length} createTask={createTask} />
          <h2>Incomplete</h2>
          <ul>
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
          <ul>
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
      </div>
    </div>
  );
}
export default App;
