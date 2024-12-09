require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.use(require("./api/auth").router);

app.use("/spells", require("./api/spells"));

app.use("/users", require("./api/users"));

app.use("/campaigns", require("./api/campaigns"))

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
