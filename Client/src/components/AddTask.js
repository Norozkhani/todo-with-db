import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const AddTask = ({ taskLen, createTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState({
    textErr: false,
    categoryErr: false,
  });

  const handleClose = () => {
    setShowAddTask(false);
    setShowErrorMsg({
      textErr: false,
      categoryErr: false,
    });
  };

  const submitNewTask = (e) => {
    e.preventDefault();
    const textInput = document.querySelector("#text");
    const categoryInput = document.querySelector("#category");

    if (textInput.value && categoryInput.value) {
      createTask({
        id: ++taskLen,
        text: textInput.value,
        category: categoryInput.value,
        completed: false,
      });

      textInput.value = "";
      categoryInput.value = "";
      handleClose();
    } else {
      textInput.value
        ? setShowErrorMsg((prev) => ({ ...prev, textErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, textErr: true }));
      categoryInput.value
        ? setShowErrorMsg((prev) => ({ ...prev, categoryErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, categoryErr: true }));
    }
  };

  return (
    <div>
      {!showAddTask && (
        <Button onClick={() => setShowAddTask(true)}>Add Task</Button>
      )}
      <Modal centered show={showAddTask} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitNewTask}>
            <input type="text" id="text" name="text" placeholder="Title" />
            {showErrorMsg.textErr && <span>Please write a title</span>}
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
            />
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
