const router = require("express").Router();
const db = require("../data/dbConfig");

router.get("/", async (req, res) => {
  try {
    const actions = await db("actions");
    res.status(200).json(actions);
  } catch (e) {
    res.status(500).json({ msg: "I want to cry" });
  }
});

router.post("/", async (req, res) => {
  try {
    const createdAction = await db("actions").insert(req.body);
    res.status(201).json(createdAction);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "I want to cry" });
  }
});

module.exports = router;
