import mongoose, { Schema } from "mongoose";

const productOrderSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    wishlist: {
      type: Boolean,
      default: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true },
);
