import { Button, Modal } from "react-bootstrap";

const EditTask = ({
  editTask,
  replaceTask,
  deleteTask,
  show,
  onHide,
  setShow,
}) => {
  const handleClose = () => setShow(false);

  const submitEditTask = (e) => {
    e.preventDefault();
    if (e.target.text.value && e.target.category.value) {
      replaceTask({
        id: editTask[0].id,
        text: e.target.text.value,
        category: e.target.category.value,
        completed: editTask[0].completed,
      });
      e.target.text.value = "";
      e.target.category.value = "";
    }
    onHide();
  };

  return (
    <section>
      <Modal show={show} onHide={onHide}>
        <form onSubmit={submitEditTask}>
          <Modal.Header>
            <input
              type="text"
              name="text"
              defaultValue={editTask.length > 0 ? editTask[0].text : ""}
            />
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              name="category"
              defaultValue={editTask.length > 0 ? editTask[0].category : ""}
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
                deleteTask(editTask[0].id);
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
