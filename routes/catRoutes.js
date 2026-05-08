const express = require("express");

const {
  getCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
} = require("../controllers/catController");

const router = express.Router();

router.get("/", getCats);
router.get("/:id", getCatById);
router.post("/", createCat);
router.put("/:id", updateCat);
router.delete("/:id", deleteCat);

module.exports = router;