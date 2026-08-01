import React, { useEffect, useMemo, useState } from "react";
import { Star, NotebookPen } from "lucide-react";
import ReviewStats from "../Ui/ReviewStats";
import BasicRating from "../Ui/BasicRating";
import ReviewBanner from "../Ui/ReviewBanner";

function ProductReview({ review }) {
  const [reviewTypePercentage, setReviewTypePercentage] = useState([
    { star: "5star", percentage: 5, buyers: 0 },
    { star: "4star", percentage: 4, buyers: 0 },
    { star: "3star", percentage: 3, buyers: 0 },
    { star: "2star", percentage: 2, buyers: 0 },
    { star: "1star", percentage: 1, buyers: 0 },
  ]);
  const [totalReview, setTotalEeview] = useState(0);
  const [avgRating, setavgRating] = useState(0);

  useEffect(() => {
    const totalReview = review.data.length + 1;
    setTotalEeview(totalReview);

    review.data.map((review, index) => {
      reviewTypePercentage[index].percentage =
        (review.count / totalReview) * 100;

      reviewTypePercentage[index].buyers = review.count;
    });
  }, [review, reviewTypePercentage]);

  useMemo(() => {
    if (!review?.data?.length) return 0;
    const totalReviews = review.data.reduce((sum, item) => {
      return sum + Number(item.count);
    }, 0);

    if (!totalReviews) return 0;

    const totalStars = review.data.reduce(
      (sum, item) => sum + item._id * item.count,
      0,
    );

    setavgRating(Number((totalStars / totalReviews).toFixed(1)));
  }, [review]);

  return (
    <section className="productReview  overflow-hidden w-6xl h-3xl bg-white  rounded-2xl  shadow-xl">
      <section className="secoand w-[80%] p-10 m-auto flex gap-7 justify-center">
        <div className="overview flex items-center justify-center flex-col">
          <div className="  ">
            <BasicRating avgRating={avgRating} />
          </div>
          <div className="font-[var(--font-body)] text-gray-600 text-center text-nowrap">
            Based on {totalReview} reviews
          </div>
          <div className="flex flex-col gap-4 mt-5  w-450px p-2">
            <div>
              <ReviewBanner avgReview={avgRating} />
            </div>
            <div>
              <button
                className="
              inline-flex items-center justify-center gap-3
              rounded-2xl
              w-full
              bg-[var(--color-heading)]
              px-4 py-4
              font-[var(--font-heading)]
              text-lg font-semibold text-white
              shadow-lg
              
              cursor-pointer
              "
              >
                <NotebookPen size={22} strokeWidth={2.2} />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[700px]  space-y-3">
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <div key={rating} className="flex items-center gap-4">
              <div className="flex  items-center gap-2">
                <Star
                  color={rating === 1 ? "red" : "gold"}
                  fill={rating === 1 ? "red" : "gold"}
                  size={18}
                />

                <span className="w-4">{rating}:</span>
              </div>

              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{
                    width: `${reviewTypePercentage[index].percentage}%`,
                  }} // Example width
                />
              </div>
              <div className="totalreviewsers">
                <p className="font-[var(--font-heading)]">
                  {reviewTypePercentage[index].buyers}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ReviewStats totalReview={totalReview} AvgRating={avgRating} />
    </section>
  );
}

export default ProductReview;
