const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
  const campaign = await prisma.campaign.findMany();
  res.json(campaign);
  } catch {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const campaign = await prisma.campaign.findUniqueOrThrow({
      where: { id: Number(id) },
    });
    res.json(campaign);
  } catch (e) {
    next(e);
  }
});