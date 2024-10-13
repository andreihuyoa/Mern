import express from "express";
import {
  createProducts,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updateProduct); // put or patch, "patch" when updating some/specific fields while "put" when updating all the fields. doesn't matter that much daw
router.delete("/:id", deleteProduct);

export default router;
