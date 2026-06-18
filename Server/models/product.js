const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  images: [
    {
      type: String,
      require: true,
    },
  ],
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    default: "",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  countInStock: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dataCreated: {
    type: Date,
    default: Date.now,
  },
});

exports.Category = mongoose.model("Product", productSchema);
