const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res) => {
  try {
    const races = await prisma.race.findMany();
    res.json(races);
  } catch (error) {
    console.error("Error fetching classes:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching classes." });
  }
});
