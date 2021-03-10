const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password_digest: { type: String, required: true },
    role: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
