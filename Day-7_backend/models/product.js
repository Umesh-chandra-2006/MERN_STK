import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Productname is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);

export const ProductModel = model("product", productSchema);
