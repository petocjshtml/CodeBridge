const express = require("express");
const router = express.Router();

// TERMINAL ROUTES (skeleton)
router.post("/input-to-terminal", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.post("/shortcut-to-terminal", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.get("/read-full-terminal", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

module.exports = router;
