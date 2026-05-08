const mongoose = require("mongoose");

const behaviourGuideSchema = new mongoose.Schema(
  {
    problem: {
      type: String,
      required: [true, "Problem is required"],
      trim: true,
    },
    causes: {
      type: [String],
      required: [true, "At least one cause is required"],
    },
    solutions: {
      type: [String],
      required: [true, "At least one solution is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BehaviourGuide", behaviourGuideSchema);