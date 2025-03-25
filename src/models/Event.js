const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true }, 
  startTime: { type: String, required: true }, 
  endTime: { type: String, required: true }, 
   description: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  project: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
