const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, maxLength: 200, required: true },
    password: { type: String, maxLength: 200, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", User);
