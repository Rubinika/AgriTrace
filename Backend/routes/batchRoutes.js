const express = require("express");
const Batch = require("../models/Batch");

const router = express.Router();


// CREATE NEW BATCH
router.post("/", async (req, res) => {
  try {
    const {
      farmerName,
      crop,
      quantity,
      unit,
      farmLocation,
      harvestDate,
      qualityGrade
    } = req.body;

    // Required fields
    if (!farmerName || !crop || !quantity) {
      return res.status(400).json({
        message: "Farmer name, crop and quantity are required"
      });
    }

    // Generate Batch ID
    const batchId = "AGRI-" + Date.now();

    // Create new batch
    const newBatch = new Batch({
      batchId: batchId,
      farmerName: farmerName,
      crop: crop,
      quantity: Number(quantity),
      unit: unit || "kg",

      farmLocation: farmLocation || "",

      harvestDate: harvestDate
        ? new Date(harvestDate)
        : null,

      qualityGrade: qualityGrade || "",

      status: "Farmer"
    });

    // Save to MongoDB
    const savedBatch = await newBatch.save();

    res.status(201).json({
      message: "Batch created successfully",
      batch: savedBatch
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error creating batch",
      error: error.message
    });
  }
});


// GET BATCH BY BATCH ID
router.get("/:batchId", async (req, res) => {
  try {
    const batch = await Batch.findOne({
      batchId: req.params.batchId
    });

    if (!batch) {
      return res.status(404).json({
        message: "Batch not found"
      });
    }

    res.status(200).json({
      message: "Batch found successfully",
      batch: batch
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error finding batch",
      error: error.message
    });
  }
});


module.exports = router;