const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
  const user = await prisma.user.findMany();
  res.json(user);
  } catch {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: { id: Number(id) },
      include: { charactersheets: {
        include: {
        race: true,
        class: true,
        }
      } 
    },

    });
    res.json(user);
  } catch (e) {
    next(e);
  }
});