import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

function ProductReview({ review }) {
  const [reviewTypePercentage, setReviewTypePercentage] = useState([
    { star: "5star", percentage: null },
    { star: "4star", percentage: null },
    { star: "3star", percentage: null },
    { star: "2star", percentage: null },
    { star: "1star", percentage: null },
  ]);

  

  useEffect(() => {
    const totalReview = review.data.length + 1;

    review.data.map((review, index) => {
      reviewTypePercentage[index].percentage = (review.count / totalReview) * 100;
    });
   console.log(reviewTypePercentage)
  }, [review,reviewTypePercentage]);

  return (
    <section>
      <div className="container">
        <div className="w-[400px] space-y-3">

          {[5, 4, 3, 2, 1].map((rating,index) => (
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
                  style={{ width: `${reviewTypePercentage[index].percentage}%` ||0 }} // Example width
                  
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
