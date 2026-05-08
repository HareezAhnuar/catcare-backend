const mongoose = require("mongoose");

const healthRecordSchema = new mongoose.Schema(
  {
    catId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cat",
      required: [true, "Cat ID is required"],
    },
    type: {
      type: String,
      required: [true, "Record type is required"],
      enum: ["vaccine", "vet_visit", "medication"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    nextDueDate: {
      type: Date,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HealthRecord", healthRecordSchema);