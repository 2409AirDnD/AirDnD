const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
  const spell = await prisma.user.findMany();
  res.json(spell);
  } catch {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const spell = await prisma.user.findUniqueOrThrow({
      where: { id: Number(id) },
    });
    res.json(spell);
  } catch (e) {
    next(e);
  }
});