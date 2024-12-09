require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(require("./routes/auth").router);

app.use("/spells", require("./routes/spells"));

app.use("/users", require("./routes/users"));

app.use("/campaigns", require("./routes/campaigns"))

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use((req, res, next) => {
  next({ status: 404, message: "That endpoint doesn't exist." });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? "Internal Server Error.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
