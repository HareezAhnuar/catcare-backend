const Cat = require("../models/Cat");

// GET all cats
const getCats = async (req, res) => {
  try {
    const cats = await Cat.find().sort({ createdAt: -1 });
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json({ message: "Failed to get cats", error: error.message });
  }
};

// GET one cat
const getCatById = async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id);

    if (!cat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.status(200).json(cat);
  } catch (error) {
    res.status(500).json({ message: "Failed to get cat", error: error.message });
  }
};

// CREATE cat
const createCat = async (req, res) => {
  try {
    const { name, age, breed, weight, notes } = req.body;

    if (!name || age === undefined || !breed || weight === undefined) {
      return res.status(400).json({
        message: "Name, age, breed, and weight are required",
      });
    }

    const cat = await Cat.create({
      name,
      age,
      breed,
      weight,
      notes,
    });

    res.status(201).json(cat);
  } catch (error) {
    res.status(400).json({ message: "Failed to create cat", error: error.message });
  }
};

// UPDATE cat
const updateCat = async (req, res) => {
  try {
    const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!cat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.status(200).json(cat);
  } catch (error) {
    res.status(400).json({ message: "Failed to update cat", error: error.message });
  }
};

// DELETE cat
const deleteCat = async (req, res) => {
  try {
    const cat = await Cat.findByIdAndDelete(req.params.id);

    if (!cat) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.status(200).json({ message: "Cat deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete cat", error: error.message });
  }
};

module.exports = {
  getCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
};