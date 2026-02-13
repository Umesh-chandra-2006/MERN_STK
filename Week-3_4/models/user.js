import { model, Schema } from "mongoose";

const cartSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "product", //name of model - product
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: [1, "Quantity can not be less than 1"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can not be negative"],
  },
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minLength: [3, "Username must be at least 3 characters long"],
      maxLength: [15, "Username must be at most 10 characters long"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      unique: true,
    },
    cart: {
      type: [cartSchema],
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);

export const UserModel = model("user", userSchema);
