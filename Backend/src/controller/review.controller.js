import { Review } from "../model/reviews.model.js";
import { Product } from "../model/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResonce.js";
import mongoose from "mongoose";

const createReview = async (req, res) => {
  try {
    const rating = req.body.star;
    const comment = req.body.comment;
    const userId = req.user._id;
    const productId = req.params.id;
    const createReview = await Review.create({
      productId,
      userId,
      rating,
      comment,
    });

    if (!createReview) {
      throw new ApiError(401, "Unable to create Review ");
    }

    res
      .status(200)
      .json(new ApiResponse(201, createReview, "Review created successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

const getReviews = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      throw new ApiError(400, "Product ID is required");
    }
    // reviews with total no of users , avg stars and their reviews

    const reviews = await Review.aggregate([
      {
        $match: {
        productId: new mongoose.Types.ObjectId(productId),
        },
      },
      {
        $bucket: {
          groupBy: "$rating",
          boundaries: [0, 1, 2, 3, 4, 5,6],
          default: "Other",
          output: {
            count: { $sum: 1 },
          },
        },
      },
    
    ]);
    console.log(reviews)

    if (!reviews.length) {
      throw new ApiError(404, "No reviews found for this product");
    }

    res
      .status(200)
      .json(new ApiResponse(200, reviews, "Reviews fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

export { createReview, getReviews };
