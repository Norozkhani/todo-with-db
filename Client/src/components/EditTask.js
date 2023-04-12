import { Button, Modal, Form } from "react-bootstrap";

const EditTask = ({
  editTask,
  replaceTask,
  deleteTask,
  showModal,
  setShowModal,
}) => {
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
      setShowModal(false); // close the modal after submitting
    }
  };

  const handleDeleteTask = () => {
    deleteTask(editTask[0].id);
    setShowModal(false); // close the modal after deleting
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <form id="editTaskForm" onSubmit={submitEditTask}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Task Text</Form.Label>
              <Form.Control
                type="text"
                name="text"
                defaultValue={editTask[0].text}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Task Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                defaultValue={editTask[0].category}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
            <Button variant="danger" onClick={handleDeleteTask}>
              Delete
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditTask;
