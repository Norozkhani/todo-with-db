const init = (app) => {
  app.post("/gettoken", handleAuth);
};

const handleAuth = (req, res) => {
  return res.json({ Token: process.env.TOKEN });
};

module.exports = { init };
