import ProductOrder from "../model/productOrder.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import Product from "../model/product.js";

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    const userId = req.user._id;
    if (!product) {
      throw new ApiError(404, "Product not found");
    }
    const productOrder = await ProductOrder.create(productId, userId, quantity);
    

    if (!productOrder) {
      throw new ApiError(500, "Failed to add product to cart");
    }
    res
      .status(201)
      .json(new ApiResponse(201, productOrder, "Product added to cart"));
  } catch (error) {
    res.status(500).json(new ApiResponse(500, null, "Internal server error"));
  }
};

export { addToCart };