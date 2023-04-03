import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const AddTask = ({ taskLen, createTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState({
    textErr: false,
    categoryErr: false,
  });

  const handleClose = () => setShowAddTask(false);

  const submitNewTask = (e) => {
    e.preventDefault();
    if (e.target.text.value && e.target.category.value) {
      createTask({
        id: ++taskLen,
        text: e.target.text.value,
        category: e.target.category.value,
        completed: false,
      });

      Array.from(e.target.querySelectorAll("input")).map(
        (input) => (input.value = "")
      );
    } else {
      e.target.text.value
        ? setShowErrorMsg((prev) => ({ ...prev, textErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, textErr: true }));
      e.target.category.value
        ? setShowErrorMsg((prev) => ({ ...prev, categoryErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, categoryErr: true }));
    }
  };

  return (
    <div>
      {!showAddTask && (
        <Button onClick={() => setShowAddTask(true)}>Add Task</Button>
      )}
      <Modal show={showAddTask} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitNewTask}>
            <input type="text" name="text" placeholder="Title" />
            {showErrorMsg.textErr && <span>Please write a title</span>}
            <input type="text" name="category" placeholder="Category" />
            {showErrorMsg.categoryErr && <span>Please write a category</span>}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={submitNewTask}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTask;

// className={showAddTask ? "back-button" : "plus-button"}
