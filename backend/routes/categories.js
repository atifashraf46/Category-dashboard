const express = require("express");
const router = express.Router();
const db = require("../models/categoryModel");
const auth = require("../middleware/auth");

// GET
router.get("/", auth, async (req, res) => {
  const data = await db("categories");
  res.json(data);
});

// POST
router.post("/", auth, async (req, res) => {
  const { name, description, image, itemCount } = req.body;
  await db("categories").insert({ name, description, image, itemCount });
  res.json({ message: "Created" });
});

// PUT
router.put("/:id", auth, async (req, res) => {
  const { name, description, image, itemCount } = req.body;

  await db("categories")
    .where({ id: req.params.id })
    .update({ name, description, image, itemCount });

  res.json({ message: "Updated" });
});

module.exports = router;