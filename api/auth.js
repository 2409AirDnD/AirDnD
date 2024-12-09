const express = require("express");
const router = express.Router();
const prisma = require("../prisma");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function createToken(id) {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "1d" });
}

router.use(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.slice(7);
  if (!token) return next();
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    //might be broken here
    const user = await prisma.user.findUniqueOrThrow({
      where: { id },
    });
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
});
router.post("/register", async (req, res, next) => {
  const { username, password, email, avatar } = req.body;

  try {
    const user = await prisma.user.register(email, username, password, avatar);
    console.log(user);
    const token = createToken(user.id);
    res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const user = await prisma.user.login(username, password);
    console.log(user);
    const token = createToken(user.id);
    console.log(token);
    res.json({ token });
  } catch (e) {
    next(e);
  }
});
function authenticate(req, res, next) {
  if (req.user) {
    next();
  } else {
    next({ status: 401, message: "You must be logged in." });
  }
}

module.exports = {
  router,
  authenticate,
};
