const router = require("express").Router();
const db = require("../data/dbConfig");

router.get("/", async (req, res) => {
  try {
    const projects = await db("projects");
    res.status(200).json(projects);
  } catch (e) {
    res.status(500).json({ msg: "I want to cry" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await db
      .select("p.name", "p.description", "p.completed", "p.id")
      .from("projects as p")
      .where({ "p.id": req.params.id })
      .first();

    const actions = await db("actions")
      .select("notes", "id", "description", "completed")
      .where({ id: req.params.id });
    res.status(200).json({ ...project, actions });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "I want to cry" });
  }
});

router.post("/", async (req, res) => {
  try {
    const createdProject = await db("projects").insert(req.body);
    res.status(201).json(createdProject);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "I want to cry" });
  }
});

module.exports = router;
