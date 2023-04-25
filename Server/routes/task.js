const init = (db, app) => {
  app.get("/tasks", handleGet(db));
  app.patch("/task/:id", handlePatch(db));
  app.post("/tasks", handlePost(db));
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

const handlePatch = (db) => {
  return async (req, res) => {
    const { title, completed, category } = req.body;
    const { id } = req.params;
    console.log({ title, id, completed, category });
    const update = await db.Task.update(
      { title, completed, category },
      { where: { id } }
    );
    res.json(update);
  };
};

module.exports = { init };
