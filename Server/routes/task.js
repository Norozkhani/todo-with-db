const init = (db, app) => {
  app.get("/tasks", handleGet(db));
  app.post("/task", handlePost(db));
  // app.patch("/task/:id", handlePatch);
};
const handleGet = (db) => {
  return async (req, res) => {
    const tasks = await db.Task.findAll();
    res.json(tasks.map((t) => t.toJSON()));
  };
};

const handlePost = (db) => {
  return async (req, res) => {
    const { title, completed, category } = req.body;
    const task = await db.Task.create({ title, completed, category });
    const data = await task.toJSON();
    res.json(data);
  };
};

// const handlePatch = async (req, res) => {
//   const { completed } = req.body;
//   const { id } = req.params;
//   await Task.update({ completed }, { where: { id } });
//   res.end();
// };

module.exports = { init };
