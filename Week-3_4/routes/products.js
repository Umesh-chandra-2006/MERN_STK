import express from "express";
import { ProductModel } from "../models/product.js";

export const productApp = express.Router();

//create API routes

//get products
productApp.get("/products", async (req, res) => {
  let products = await ProductModel.find(
    {},
    { productName: 1, price: 1, brand: 1, _id: 0 },
  );
  res.status(200).json({ message: "All Products", payload: products });
});

//create product
productApp.post("/products", async (req, res) => {
  let newProductDocument = new ProductModel(req.body);
  await newProductDocument.save();
  res
    .status(201)
    .json({
      message: "Product created",
      payload: {
        productName: newProductDocument.productName,
        price: newProductDocument.price,
        brand: newProductDocument.brand      },
    });
});