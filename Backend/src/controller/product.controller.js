import { Product } from "../model/product.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResonce.js";
import { Review } from "../model/reviews.model.js";
import mongoose from "mongoose";

// register a product
const registerProduct = async (req, res) => {
  try {
    const { productName, productDescription, category } = req.body;

    if (!productName || !productDescription || !category) {
      throw new ApiError(401, "All fields are required");
    }

    if (req.files.length < 0) {
      throw new ApiError(401, "product image is required");
    }

    const uploadFirstImg = await uploadOnCloudinary(req.files[0].path);
    console.log("1. Request received");
    if (!uploadFirstImg) {
      throw new ApiError(401, "unable to upload product image");
    }
    const product = await Product.create({
      productName,
      productDescription,
      category,
      images: [
        { url: uploadFirstImg.secure_url, public_id: uploadFirstImg.public_id },
      ],
    });
    console.log("2. Request received");
    if (req.files.length >= 1) {
      await Promise.all(
        req.files.slice(1).map(async (image) => {
          const upload = await uploadOnCloudinary(image.path);
          if (upload) {
            const updatedProduct = await Product.findByIdAndUpdate(
              product._id,
              {
                $push: {
                  images: {
                    url: upload.secure_url,
                    public_id: upload.public_id,
                  },
                },
              },
            );
          }
          console.log("3. Request received");
        }),
      );
    }
    console.log("4. Request received");
    if (!product) {
      console.log("5. Request received");
      throw new ApiError(500, "something went wrong while saving the product");
    }
    const createdProductDoc = await Product.findById(product._id);
    console.log("6 Request received");
    return res.status(201).json(new ApiResponse(201, createdProductDoc));
  } catch (error) {
    return res.status(500, "error.message");
    throw new ApiError(500, "error.message");
  }
};

// search function

const searchProduct = async (req, res) => {
  const searchItem = req.query.search;
  const productBrands = req.query.brands;
  const priceFilter = req.query.priceRange;
  const rating = req.query.rating;
  const pageNo = req.query.page || 0;
  const items = req.query.items || 10;


  let searchQuery = {};

  if (req.query.search) {
    searchQuery.$text = { $search: req.query.search };
  }

  if (req.query.category) {
    searchQuery.category = req.query.category;
  }

  if (req.query.brands) {
    searchQuery.brands = req.query.brands;
  }

  if (req.query.minPrice) {
    searchQuery.price = { $gte: req.query.minPrice };
  }

  if (req.query.maxPrice) {
    searchQuery.price = { $lte: req.query.maxPrice };
  }

  searchQuery = await Product.find(searchQuery)
    .sort({ createdAt: 1 })
    .skip(pageNo * items)
    .limit(items);

  res
    .status(200)
    .json(new ApiResponse(200, searchQuery, "products fetched successfully"));
};

// get a specific product by id

const getProduct = async (req, res) => {
  try {
    const productId = String(req.params.id);
   
   const productWithReview = await Product.aggregate([
  {
    $match: {
      _id: new mongoose.Types.ObjectId(productId),
    },
  },
  {
    $lookup: {
      from: "reviews",
      localField: "_id",
      foreignField: "productId",
      as: "reviews",
    },
    
  },
   {
    $addFields: {
      reviewCount: { $size: "$reviews" },
    },
  }
]);
    res
      .status(200)
      .json(
        new ApiResponse(200, productWithReview, "product fetched successfully"),
      );
  } catch (error) {
    throw new ApiError(500, error.message, error);
  }
};

export { registerProduct, searchProduct, getProduct };
