const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: String,
    priority: { type: String, required: true },
    deadline: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
