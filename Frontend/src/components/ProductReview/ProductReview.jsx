import React from "react";
import { Star } from "lucide-react";
function ProductReview({ props }) {
  return (
  <section>
  <div className="container">
    <div className="w-[400px] space-y-3">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div key={rating} className="flex items-center gap-2">
          <Star
            color={rating === 1 ? "red" : "gold"}
            fill={rating === 1 ? "red" : "gold"}
            size={18}
          />

          <span className="w-4">{rating}:</span>

          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400 rounded-full"
              style={{ width: `${rating * 20}%` }} // Example width
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default ProductReview;
