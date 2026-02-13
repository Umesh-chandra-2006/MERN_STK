import express from "express";
import { UserModel } from "../models/user.js";
import { ProductModel } from "../models/product.js";
import { hash, compare } from "bcryptjs";

export let userApp = express.Router();

userApp.post("/users", async (req, res) => {
  let newUser = req.body;
  //validate new user
  await new UserModel(newUser).validate();

  let hashedPassword = await hash(newUser.password, 12);
  newUser.password = hashedPassword;
  newUser = new UserModel(newUser);
  await newUser.save({ validateBeforeSave: false });
  res
    .status(201)
    .json(
      { message: "User Created Successfully" },
      { payload: { username: newUser.username } },
    );
});

userApp.get("/users", async (req, res) => {
  let users = await UserModel.find({}, { email: 0, password: 0, _id: 0 });
  res.status(200).json({ message: "All USers", payload: users });
});

userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  let { uid, pid } = req.params;
  let user = await UserModel.findById(uid);
  let product = await ProductModel.findById(pid);
  console.log(product);
  let quantity = 1;
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  }
  //if product already in cart, update quantity
  let isCart = user.cart.find((prod) => prod.pid == product.pid);
  if (isCart) {
    isCart.quantity += quantity;
    isCart.price = product.price * isCart.quantity;
    await user.save();
    let modifiedUser = await UserModel.findById(uid).populate("cart.product");
    return res.status(200).json({
      message: "Product quantity updated in cart",
      payload: modifiedUser,
    });
  }
  let modifiedUser = await UserModel.findByIdAndUpdate(
    uid,
    {
      $push: {
        cart: {
          pid: product.pid,
          product: pid,
          quantity: quantity,
          price: product.price * quantity,
        },
      },
    },
    { new: true },
  ).populate("cart.product");
  res
    .status(200)
    .json({ message: "Product added to cart", payload: modifiedUser });
});

//read user by id
userApp.get("/users/:id", async (req, res) => {
  let { id } = req.params;
  let user = await UserModel.findById(id, { password: 0, __v: 0 }).populate(
    "cart.product",
  );
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ message: "User found", payload: user });
});
