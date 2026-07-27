import React from "react";
import { Star } from "lucide-react";
function ProductReview({ props }) {
  
  return (
    <section>
      <div className="container flex gap-2">
        <div>
          <Star color="gold" />5:
          <Star color="gold" />4:
          <Star color="gold" />3:
          <Star color="gold" />2:
          <Star color="red" />1:
        </div>
        <div>
          <div className="bg-yellow-300 rounded-2xl w-[]"></div>
        </div>
      </div>
    </section>
  );
}

export default ProductReview;
