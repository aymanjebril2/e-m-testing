const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    items: [
      new Schema({
        title: { type: String, required: true },
        link: { type: String, required: true },
      }),
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", User);
