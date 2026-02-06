const mongoose = require("mongoose");

const RoadmapSchema = new mongoose.Schema(
  {
    goal: String,
    level: String,
    hoursPerWeek: Number,
    roadmap: Object
  },
  { timestamps: true }
);

module.exports = mongoose.model("Roadmap", RoadmapSchema);
