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

router.post("/", async (req, res) => {
  const { name, description, DM, players, characters } = req.body;
  try {
    const newCampaign = await prisma.campaign.create({
      data: {
        name,
        description,
        DM: {
          connect: {
            id: 1
          }
        },
        characters: {
          connect: [
            {
              id: 1
            }
          ]
        }
      },    
    });
    res.status(201).json(newCampaign);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "interal server error " });
  }
});