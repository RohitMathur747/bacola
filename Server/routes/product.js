const { Category } = require("../models/category.js");
const { Product } = require("../models/product.js");
const express = require("express");
const router = express.Router();
const pLimit = require("p-limit");
const cloudinary = require("cloudinary").v2;

//get
router.get("/", async (req, res) => {
  const productList = await Product.find().populate("category");
  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});

// post create
router.post("/create", async (req, res) => {
  const limit = pLimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });

  const UploadStatus = await Promise.all(imagesToUpload);

  const imgUrl = UploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }

  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(404).send("Invalid Category!");
  }

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: imgurl,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    isFeatured: req.body.isFeatured,
  });

  product = await product.save();
  if (!product) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
  res.status(201).json(product);
});

//delete
router.delete("/:id", async (req, res) => {
  const deleteProduct = await Category.findByIdAndDelete(req.params.id);
  if (!deleteProduct) {
    res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json({ success: true, message: "Product Deleted" });
});

//by get id
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res
      .status(500)
      .json({ message: "the Product with the give id was not found" });
  }
  return res.status(200).send(product);
});

//updated
router.put("/:id", async (req, res) => {
  const limit = pLimit(2);

  const imagesToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });

  const UploadStatus = await Promise.all(imagesToUpload);

  const imgUrl = UploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "images cannot upload",
      status: false,
    });
  }

  // Update the product by id
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      images: imgUrl,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
    },
    { new: true },
  );
  if (!product) {
    res
      .status(500)
      .json({ message: "Product cannot be Updated", success: false });
  }
  res.status(200).json({
    message: "the product is upadted",
    status: true,
  });
});

module.exports = router;
