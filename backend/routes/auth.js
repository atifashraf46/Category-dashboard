const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models/userModel");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    await db("users").insert({ email, password: hash });

    const token = jwt.sign({ email }, "secretkey", { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
});

// 👉 ADD THIS — do not remove anything above
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await db("users").where({ email }).first();
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ email }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;