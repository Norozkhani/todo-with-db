const init = (db, app) => {
  app.get("/tasks", handleGet(db));
  app.patch("/task/:id", handlePatch(db));
  app.post("/tasks", handlePost(db));
  app.delete("/task/:id", handleDelete(db));
};
const handleGet = (db) => {
  try {
    return async (req, res) => {
      const tasks = await db.Task.findAll();
      res.json(tasks.map((t) => t.toJSON()));
    };
  } catch (error) {
    console.error(error);
  }
};

const handlePost = (db) => {
  try {
    return async (req, res) => {
      const { title, completed, category } = req.body;
      const task = await db.Task.create({ title, completed, category });
      const data = await task.toJSON();
      res.json(data);
    };
  } catch (error) {
    console.error(error);
  }
};

const handleDelete = (db) => {
  try {
    return async (req, res) => {
      const { id } = req.params;

      const update = await db.Task.destroy({ where: { id } });

      res.end();
    };
  } catch (error) {
    console.error(error);
  }
};

const handlePatch = (db) => {
  try {
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
  } catch (error) {
    console.error(error);
  }
};

module.exports = { init };
