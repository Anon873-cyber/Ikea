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
    quantity:{
      type: Number,
      default: 1,
    }
  },
  { timestamps: true },
);

export default mongoose.model("ProductOrder", productOrderSchema);
