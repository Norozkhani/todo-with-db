import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [itemText, setItemText] = useState("");
  //Add new item to database (NOT FINISHED VIDEO AT 24:30)
  const addItem = async () => {
    try {
      const res = await axios.post();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          value={itemText}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list-Items">
        <div className="todo-item">
          <p className="item-content">This is item 1</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">This is item 2</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">This is item 3</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">This is item 4</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
