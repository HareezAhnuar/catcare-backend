const BehaviourGuide = require("../models/BehaviourGuide");

// GET all behaviour guides
const getBehaviourGuides = async (req, res) => {
  try {
    const guides = await BehaviourGuide.find().sort({ problem: 1 });
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get behaviour guides",
      error: error.message,
    });
  }
};

// GET one behaviour guide
const getBehaviourGuideById = async (req, res) => {
  try {
    const guide = await BehaviourGuide.findById(req.params.id);

    if (!guide) {
      return res.status(404).json({ message: "Behaviour guide not found" });
    }

    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get behaviour guide",
      error: error.message,
    });
  }
};

// CREATE behaviour guide
const createBehaviourGuide = async (req, res) => {
  try {
    const { problem, causes, solutions } = req.body;

    if (!problem || !causes || !solutions) {
      return res.status(400).json({
        message: "Problem, causes, and solutions are required",
      });
    }

    const guide = await BehaviourGuide.create({
      problem,
      causes,
      solutions,
    });

    res.status(201).json(guide);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create behaviour guide",
      error: error.message,
    });
  }
};

// UPDATE behaviour guide
const updateBehaviourGuide = async (req, res) => {
  try {
    const guide = await BehaviourGuide.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!guide) {
      return res.status(404).json({ message: "Behaviour guide not found" });
    }

    res.status(200).json(guide);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update behaviour guide",
      error: error.message,
    });
  }
};

// DELETE behaviour guide
const deleteBehaviourGuide = async (req, res) => {
  try {
    const guide = await BehaviourGuide.findByIdAndDelete(req.params.id);

    if (!guide) {
      return res.status(404).json({ message: "Behaviour guide not found" });
    }

    res.status(200).json({ message: "Behaviour guide deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete behaviour guide",
      error: error.message,
    });
  }
};

module.exports = {
  getBehaviourGuides,
  getBehaviourGuideById,
  createBehaviourGuide,
  updateBehaviourGuide,
  deleteBehaviourGuide,
};