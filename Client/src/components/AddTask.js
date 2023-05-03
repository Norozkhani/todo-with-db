import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const AddTask = ({ taskLen, createTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState({
    textErr: false,
    categoryErr: false,
  });
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleClose = () => {
    setShowAddTask(false);
    setShowErrorMsg({
      textErr: false,
      categoryErr: false,
    });
  };

  //Function to add task with errorMsg if not complete Title or Category
  const submitNewTask = (e) => {
    e.preventDefault();

    if (title && category) {
      createTask({
        id: ++taskLen,
        title: title,
        category: category,
        completed: false,
      });

      setTitle("");
      setCategory("");
      handleClose();
    } else {
      title
        ? setShowErrorMsg((prev) => ({ ...prev, textErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, textErr: true }));
      category
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
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
              placeholder="Title"
            />
            {showErrorMsg.textErr && <span>Please write a title</span>}
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
