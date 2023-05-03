const init = (db, app) => {
  app.get("/tasks", handleGet(db));
  app.patch("/task/:id", handlePatch(db));
  app.post("/tasks", handlePost(db));
  app.delete("/task/:id", handleDelete(db));
};

// This function is to get all the todos in the database
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

//This function is to handle all the new todos added from the client side
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

// This function handles deleting todos
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

// This function is to handle editing todos, title, category and completed/not completed
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
