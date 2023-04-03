import { useState } from "react";
import DateTime from "./components/Date";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import "bootstrap/dist/css/bootstrap.css";

function App() {
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
  const [editTask, setEditTask] = useState([]);
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
    setEditTask(tasks.filter((arr) => arr.id === id));
  };
  const replaceTask = (editedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
    setEditTask([]);
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setEditTask([]);
  };
  return (
    <div className="App_Wrapper">
      <div className="App">
        <section>
          <DateTime />
          <AddTask taskLen={tasks.length} createTask={createTask} />
          {editTask.length > 0 && (
            <EditTask
              editTask={editTask}
              replaceTask={replaceTask}
              deleteTask={deleteTask}
            />
          )}
          <Tasks
            tasks={tasks}
            handleCheck={handleCheck}
            activateEditTask={activateEditTask}
          />
        </section>
      </div>
    </div>
  );
}
export default App;
