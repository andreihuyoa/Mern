import express from "express";
import mongoose from "mongoose";

import Product from "../models/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}); //empty object means it gets/fetch everything in the db
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching products: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create Product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// put or patch, "patch" when updating some/specific fields while "put" when updating all the fields. doesn't matter that much daw
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product Id" });
  }

  try {
    // hover { new: true } to understand
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//postman desktop

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log("Error in deleting product");
    res.status(404).json({ success: false, message: "Product Not Found" });
  }
});

export default router;
