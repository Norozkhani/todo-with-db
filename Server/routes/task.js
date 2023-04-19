const init = (db, app) => {
  app.get("/test", (req, res) => {
    res.send("Banana");
  });
  app.get("/tasks", async (req, res) => {
    const tasks = await db.Task.findAll();
    res.json(tasks.map((t) => t.toJSON()));

    console.log(tasks);
  });
};

module.exports = { init };

// app.get("/tasks", async (req, res) => {
//   const tasks = await Task.findAll();
//   res.json(tasks.map((t) => t.toJSON()));

//   console.log(tasks);
// });

// app.post("/task", async (req, res) => {
//   const { title, completed } = req.body;
//   const task = await Task.create({ title, completed });
//   res.json(task.toJSON());
// });

// app.patch("/task/:id", async (req, res) => {
//   const { completed } = req.body;
//   const { id } = req.params;
//   await Task.update({ completed }, { where: { id } });
//   res.end();
// });
