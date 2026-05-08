const HealthRecord = require("../models/HealthRecord");

// GET all health records
const getHealthRecords = async (req, res) => {
  try {
    const { type, search } = req.query;

    const query = {};

    // Advanced feature 1: Filtering
    if (type) {
      query.type = type;
    }

    // Advanced feature 2: Search
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const records = await HealthRecord.find(query)
      .populate("catId", "name breed")
      .sort({ date: -1 });

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get health records",
      error: error.message,
    });
  }
};

// GET one health record
const getHealthRecordById = async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id).populate(
      "catId",
      "name breed"
    );

    if (!record) {
      return res.status(404).json({ message: "Health record not found" });
    }

    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get health record",
      error: error.message,
    });
  }
};

// CREATE health record
const createHealthRecord = async (req, res) => {
  try {
    const { catId, type, title, date, nextDueDate, notes } = req.body;

    if (!catId || !type || !title || !date) {
      return res.status(400).json({
        message: "Cat, type, title, and date are required",
      });
    }

    const record = await HealthRecord.create({
      catId,
      type,
      title,
      date,
      nextDueDate,
      notes,
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create health record",
      error: error.message,
    });
  }
};

// UPDATE health record
const updateHealthRecord = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!record) {
      return res.status(404).json({ message: "Health record not found" });
    }

    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update health record",
      error: error.message,
    });
  }
};

// DELETE health record
const deleteHealthRecord = async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Health record not found" });
    }

    res.status(200).json({ message: "Health record deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete health record",
      error: error.message,
    });
  }
};

module.exports = {
  getHealthRecords,
  getHealthRecordById,
  createHealthRecord,
  updateHealthRecord,
  deleteHealthRecord,
};