const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    batchId: {
      type: String,
      required: true,
      unique: true
    },

    farmerName: {
      type: String,
      required: true
    },

    crop: {
      type: String,
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    unit: {
      type: String,
      default: "kg"
    },

    farmLocation: {
      type: String,
      default: ""
    },

    harvestDate: {
      type: Date
    },

    qualityGrade: {
      type: String,
      default: ""
    },

    collectionCenter: {
      name: {
        type: String,
        default: ""
      },
      location: {
        type: String,
        default: ""
      },
      date: {
        type: Date
      },
      quality: {
        type: String,
        default: ""
      }
    },

    transport: {
      vehicleNumber: {
        type: String,
        default: ""
      },
      driverName: {
        type: String,
        default: ""
      },
      source: {
        type: String,
        default: ""
      },
      destination: {
        type: String,
        default: ""
      },
      date: {
        type: Date
      }
    },

    warehouse: {
      name: {
        type: String,
        default: ""
      },
      location: {
        type: String,
        default: ""
      },
      date: {
        type: Date
      },
      temperature: {
        type: Number
      },
      humidity: {
        type: Number
      }
    },

    retailer: {
      name: {
        type: String,
        default: ""
      },
      location: {
        type: String,
        default: ""
      },
      date: {
        type: Date
      }
    },

    status: {
      type: String,
      default: "Farmer"
    }
  },
  {
    timestamps: true
  }
);

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;