import { Router } from "express";
import {verifyJWT} from '../middleware/auth.middleware.js'
import { addToCartOrWishlist, editOrDeleteCartItem, getCartItems } from "../controller/cart.controller.js";

const router = Router();

router.use(verifyJWT);
router.post("/cart/:productId", addToCartOrWishlist);
router.put("/cart/:productId", editOrDeleteCartItem);
router.get("/cart", getCartItems);

export default router;
