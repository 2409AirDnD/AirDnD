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
        DM,
        players,
        characters,
      },
    });
    res.status(201).json(newCampaign);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "interal server error " });
  }
});
//has to make a campaign token? upon making the request
//post if they wanna be a player or DM if DM given DM status/token?
//user will add the player they want added in

//id, name, description, DM user,
//if the user is DM, it would be true?

//has to make a campaign id, campaign name and
//campaign description, as user, you will decide if you're a player in the campaign
//or the dm for that certain campaign.
//will there be a campaign route/component that will be need to be rendered upon creation, access through character sheet
//where will the button be
