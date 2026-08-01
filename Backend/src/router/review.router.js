import { Router } from "express";
import { createReview, getReviews } from "../controller/review.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/products/:id/review", getReviews);
router.use(verifyJWT);
router.post("/products/:id/review", createReview);

export default router;
