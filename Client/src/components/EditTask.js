const EditTask = ({ editTask, replaceTask, deleteTask }) => {
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
  };
  return (
    <section>
      <form onSubmit={submitEditTask}>
        <input type="text" name="text" defaultValue={editTask[0].text} />
        <input
          type="text"
          name="category"
          defaultValue={editTask[0].category}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => deleteTask(editTask[0].id)}>
          Delete
        </button>
      </form>
    </section>
  );
};
export default EditTask;
