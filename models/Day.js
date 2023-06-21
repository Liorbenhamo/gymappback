const mongoose = require("mongoose");

const daysSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true,
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  users: [
    {
      type: String,
      required: false,
    },
  ],
});
module.exports = mongoose.model("days", daysSchema);
