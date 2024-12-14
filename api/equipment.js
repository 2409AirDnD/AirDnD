const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const equipment = await prisma.equipment.findMany();
    res.json(equipment);
  } catch (e) {
    console.error("Error fetching equipment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching equipment." });
  }
});

router.get("/:type", async (req, res, next) => {
  const { type } = req.params;
  try {
    const result = await prisma.equipment.findMany({
      where: {
        type: type,
      },
    });
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});
