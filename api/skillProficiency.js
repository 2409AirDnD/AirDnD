const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const skillProficiency = await prisma.skillProficiency.findMany();
    res.json(skillProficiency);
  } catch {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const skillProficiency = await prisma.spell.findUniqueOrThrow({
      where: { id: Number(id) },
    });
    res.json(skillProficiency);
  } catch (e) {
    next(e);
  }
});
