import express from "express";
import { connect } from "mongoose";
import {userApp as userApi} from "./routes/users.js";
import {productApp as productApi} from "./routes/products.js";
import cookieParser from "cookie-parser";

const app= express();
const PORT= 3000;

async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/ecomdb");
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Database connection failed", err);
  }
}

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/user-api",userApi);
app.use("/product-api",productApi);
function errorHandler(err, req, res, next) {
    res.status(500).json({ message:"error", error: err.message });
};
app.use(errorHandler);