
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/userModel");
require("./models/categoryModel");

const authRoutes = require("./routes/auth");

const categoryRoutes = require("./routes/categories");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => res.send("API running"));
app.use("/api/categories", categoryRoutes);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server up");
});