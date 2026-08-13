import ProductOrder from "../model/productOrder.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResonce.js";
import { Product } from "../model/product.model.js";
import mongoose from "mongoose";

const addToCartOrWishlist = async (req, res) => {
  try {
    const productId = new mongoose.Types.ObjectId(req.params.productId);

    const quantity = req.query.quantity;
    const userId = req.user._id;
    const wishlist = req.query.wishlist === "true" ? true : false;
    const product = await Product.findById(productId);

    if (!product) {
      throw new ApiError(404, "Product not found");
    }
    const productOrder = await ProductOrder.create({
      productId,
      userId,
      quantity,
      wishlist,
    });

    if (!productOrder) {
      throw new ApiError(500, "Failed to add product to cart");
    }

    const responceQuery = await ProductOrder.findOne({
      productId,
      userId,
    }).populate("productId");

    res
      .status(201)
      .json(new ApiResponse(201, responceQuery, "Product added to cart"));
  } catch (error) {
    console.log(error, "error at Addtocartorwishlist controller");
    res.status(500).json(new ApiResponse(500, null, "Internal server error"));
  }
};

const editOrDeleteCartItem = async (req, res) => {
  try {
    const productId = new mongoose.Types.ObjectId(req.params.productId);
    const userId = new mongoose.Types.ObjectId(req.user._id);
    console.log("userId", userId, "productId", productId);
    const deleteParams = req.query.delete;
    console.log("deleteParams", deleteParams);
    if (deleteParams) {
      const deletedItem = await ProductOrder.findOneAndDelete({
        _id:productId,
        userId,
      });

      res
        .status(200)
        .json(new ApiResponse(200, deletedItem, "Product removed from cart"));
      return;
    } else {
      const updatedItem = await ProductOrder.findOneAndUpdate(
        { productId, userId },
        { $set: { quantity: req.body.quantity, wishlist: req.body.wishlist } },
        { new: true },
      );
      res
        .status(200)
        .json(new ApiResponse(200, updatedItem, "Product updated in cart"));
    }
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

const getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const wishlist = req.query.wishlist === "true" ? true : false;
    const cartItems = await ProductOrder.find({
      userId,
      wishlist: wishlist,
    }).populate("productId").select("-userId -__v -createdAt -updatedAt");
    res
      .status(200)
      .json(
        new ApiResponse(200, cartItems, "Cart items retrieved successfully"),
      );
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

export { addToCartOrWishlist, getCartItems, editOrDeleteCartItem };
