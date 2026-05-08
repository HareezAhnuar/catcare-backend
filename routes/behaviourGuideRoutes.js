const express = require("express");

const {
  getBehaviourGuides,
  getBehaviourGuideById,
  createBehaviourGuide,
  updateBehaviourGuide,
  deleteBehaviourGuide,
} = require("../controllers/behaviourGuideController");

const router = express.Router();

router.get("/", getBehaviourGuides);
router.get("/:id", getBehaviourGuideById);
router.post("/", createBehaviourGuide);
router.put("/:id", updateBehaviourGuide);
router.delete("/:id", deleteBehaviourGuide);

module.exports = router;