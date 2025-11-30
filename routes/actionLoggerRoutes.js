const express = require("express");
const router = express.Router();

// ACTION LOGGER ROUTES (skeleton)
router.get("/get-action-logs", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.delete("/delete-action-logs", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

module.exports = router;
