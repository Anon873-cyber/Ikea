import React from "react";
import { CheckCircle2, Info, AlertTriangle, XCircle } from "lucide-react";
function ReviewBanner({ avgReview }) {
  return (
    <div
      className={`rounded-2xl ${avgReview > 3 ? "bg-green-200" : "bg-red-200"}   p-1 pl-10 pr-10 `}
    >
      <p
        className="text-nowrap text-gray-800 flex justify-center gap-2 items-center"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {avgReview >= 4 ? (
          <>
            <CheckCircle2 className=" inline" />
            Customers love this product
          </>
        ) : avgReview >= 3 ? (
          <>
            <Info className="inline" />
            Customers generally like this product
          </>
        ) : avgReview >= 2 ? (
          <>
            <Info className="inline" />
            Mixed customer reviews
          </>
        ) : (
          <>
            <AlertTriangle className=" inline" />
            Customers did not like this product
          </>
        )}
      </p>
    </div>
  );
}

export default ReviewBanner;
