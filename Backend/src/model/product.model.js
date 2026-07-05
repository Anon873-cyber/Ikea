import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { type } from "os";

const ProductSchmea = new mongoose.Schema({
  productName: { type: String },
  productDescription: { type: String },
  
  category: {
    type: String,
    enum: ["Furniture", "Electronics", "Clothing", "Books", "Sports"],
    required: true,
  
  },
  brand:{
    type:String,
    default:"generic"
  },
  price:{
    type:Number,
    default:100
  },
  reviews: {
    type: Number,
    default: 0,
  },
  tags:[],
  images: [
    {
      url: String,
      public_id: String,
    },
  ],
});
// creating text index on productName,product description
ProductSchmea.index({
  productName: "text",
  productDescription: "text",
})

ProductSchmea.plugin(mongooseAggregatePaginate);
export const Product = mongoose.model("Product", ProductSchmea);
