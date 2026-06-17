const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
const pLimit = require("p-limit");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
});

//get
router.get("/", async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.send(categoryList);
});

//by get id
router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res
      .status(500)
      .json({ message: "the category with the give id was not found" });
  }
  return res.status(200).send(category);
});

//delete
router.delete("/:id", async (req, res) => {
  const deleteUser = await Category.findByIdAndRemove(req.params.id);
  if (!deleteUser) {
    res.status(404).json({ message: "Category not found" });
  }
  return res.status(200).json({ success: true, message: "Category Deleted" });
});

//updated
router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      images: imgurl,
      color: req.body.color,
    },
    {
      new: true,
    },
  );
  if (!category) {
    res
      .status(500)
      .json({ message: "Category cannot be Updated", success: false });
  }
  res.send(category);
});

// post create
router.post("/create", async (req, res) => {
  try {
    const { images = [] } = req.body;
    const uploadStatus = await Promise.all(
      images.map(async () => {
        return { secure_url: "" };
      }),
    );

    const imgurl = uploadStatus.map((item) => item.secure_url);

    if (!uploadStatus) {
      return res.status(500).json({
        error: "images cannot upload",
        status: false,
      });
    }

    return res.status(201).json({
      status: true,
      images: imgurl,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Internal server error",
      status: false,
    });
  }
});

module.exports = router;
