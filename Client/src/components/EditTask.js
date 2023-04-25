import e from "cors";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditTask = ({
  editTask,
  replaceTask,
  deleteTask,
  setActivateEditTask,
}) => {
  const [title, setTitle] = useState(editTask.title);
  const [category, setCategory] = useState(editTask.category);

  const handleClose = () => setActivateEditTask(false);

  const submitEditTask = async (e) => {
    e.preventDefault();

    await replaceTask({ ...editTask, title, category });
    setActivateEditTask(false);
  };

  return (
    <section>
      <Modal show="true" onHide={() => setActivateEditTask(null)}>
        <form onSubmit={submitEditTask}>
          <Modal.Header>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
            />
          </Modal.Header>
          <Modal.Body>
            <input
              value={category}
              type="text"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Save</Button>
            <Button
              variant="danger"
              className="delete-item"
              type="button"
              onClick={() => {
                handleClose();
                deleteTask(editTask.id);
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </section>
  );
};

export default EditTask;
