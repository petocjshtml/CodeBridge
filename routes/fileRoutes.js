const express = require("express");
const router = express.Router();

// FILE ROUTES (skeleton)
router.post("/define-root-folder", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.get("/get-root-folder", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.post("/create-folder", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.post("/create-file", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.delete("/delete-folder", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.delete("/delete-file", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.put("/edit-full-file", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.put("/edit-partial-file", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

router.get("/tree", (req, res) => {
  res.status(501).json({ message: "Not implemented" });
});

module.exports = router;
