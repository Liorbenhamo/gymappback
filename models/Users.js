const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cardnum: {
    type: String,
    required: false,
  },
  identitycard: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  expireyear: {
    type: String,
    required: false,
  },
  expiremonth: {
    type: String,
    required: false,
  },
  cardcode: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("users", usersSchema);
