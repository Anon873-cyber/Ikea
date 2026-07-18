import ProductOrder from "../model/productOrder.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import Product from "../model/product.js";

const addToCartOrWishlist = async (req, res) => {
  try {
    const prodictId = req.params.productId;
    const quantity = req.query.quantity;
    const product = await Product.findById(productId);
    const userId = req.user._id;
    const wishlist = req.query.wishlist === "true" ? true : false;
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
    res
      .status(201)
      .json(new ApiResponse(201, productOrder, "Product added to cart"));
  } catch (error) {
    res.status(500).json(new ApiResponse(500, null, "Internal server error"));
  }
};

const editorDeleteCartItem = async (req, res) => {
  try {
    const { productId } = req.params;

    const userId = req.user._id;
    const deleteParams = req.params.delete === "true" ? true : false;
    const product = await Product.findOne(productId, userId);
    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    if (deleteParams) {
      const deletedItem = await ProductOrder.findOneAndDelete({
        productId,
        userId,
      });
    }
    const updatedItem = await ProductOrder.findOneAndUpdate(
      { productId, userId },
      { $set: { quantity: req.body.quantity, wishlist: req.body.wishlist } },
      { new: true },
    );
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

const getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const cartItems = await ProductOrder.find({
      userId,
      wishlist: false,
    }).populate("productId");
    res
      .status(200)
      .json(
        new ApiResponse(200, cartItems, "Cart items retrieved successfully"),
      );
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

export { addToCart, getCartItems, editorDeleteCartItem };
