import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { registerProduct,searchProduct,getProduct } from "../controller/product.controller.js";
import {verifyJWT} from '../middleware/auth.middleware.js'

const router = Router();
//router.use(verifyJWT);
router.post("/products", upload.array("productImages", 4), registerProduct);
router.get("/products/search/",searchProduct)
router.get("/products/:id",getProduct)

export default router;
