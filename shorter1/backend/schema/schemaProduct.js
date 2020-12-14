const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const productSchema = mongoose.Schema(
  {
    idProduct: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    distance: {
        type: Number,
        required: true
      }
  },
  { timestamps: { createdAt: "created_at" } }
);

productSchema.methods = {
  numberProduct: function() {
    return 10;
  }
};

module.exports = mongoose.model("Product", productSchema);