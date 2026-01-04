const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "No token" });

  const token = header.split(" ")[1];

  try {
    jwt.verify(token, "secretkey");
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};