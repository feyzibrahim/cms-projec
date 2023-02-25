const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  getCollege,
  createCollege,
} = require("../controllers/collegeController");

const router = express.Router();

router.use(requireAuth);

router.get("/", getCollege);

router.post("/", createCollege);

router.delete("/", (req, res) => {
  res.json({ mssg: "Delete the college" });
});

router.patch("/", (req, res) => {
  res.json({ mssg: "Update the college" });
});

module.exports = router;
