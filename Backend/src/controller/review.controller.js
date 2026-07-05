import { Review } from "../model/reviews.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResonce.js";


const createReview = async (req,res) => {

   try {
     
     const rating = req.body.star
     const comment = req.body.comment
     const userId=req.user._id
     const productId = req.params.id
     const createReview = await Review.create({productId,userId,rating,comment})
 
     if (!createReview) {
         throw new ApiError(401,"Unable to create Review ")
     }
     
     res.status(200).json(new ApiResponse(201,createReview,"Review created successfully"))
          
   } catch (error) {
    
    throw new ApiError(500,error.message)
   }

 }

 export {createReview}