const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, required: true },
    full_name: { type: String, required: true },
    password_digest: { type: String, required: true },
    role: { type: String, default: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
