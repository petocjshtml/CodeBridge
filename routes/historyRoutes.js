const express = require("express");
const router = express.Router();

// HISTORY ROUTES (skeleton)
router.get("/get-history", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.post("/jump-in-history", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

module.exports = router;
