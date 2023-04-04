import { Button, Modal, Form, Col, Row } from "react-bootstrap";
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
      <Modal
        className=""
        centered
        size="lg"
        show={showAddTask}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <div className="mb-3">
            {showErrorMsg.textErr && (
              <div className="mb-2 text-danger">Please write a title</div>
            )}
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Title"
              className="form-control form-control-lg"
            />
          </div>
          <div className="mb-3">
            {showErrorMsg.categoryErr && (
              <div className="mb-2 text-danger">Please write a category</div>
            )}
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              className="form-control form-control-lg"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
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
