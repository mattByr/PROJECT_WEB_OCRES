const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const timeSchema = mongoose.Schema(
  {
    idTime: {
        type: String,
        unique: true,
        required: true
      },
      timeMaj: {
      type: Date,
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);



module.exports = mongoose.model("Time", timeSchema);