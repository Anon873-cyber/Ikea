import React, { useState } from "react";
import MoreProductDesc from "../MoreProductDesc/MoreProductDesc";
import MoreProductAdditionalInfo from "../MoreProductAdditionalInfo/MoreProductAdditionalInfo";
import ProductReview from "../ProductReview/ProductReview";

function MoreProductInfo() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="MoreProductInfo w-full bg-[#F9F8FE] py-10">
      {/* Tabs */}
      <div className="flex justify-center items-center">
        <div className="container flex items-center justify-center gap-8">
          <h2
            className={`text-xl text-[var(--color-heading)] font-medium font-[var(--font-heading)] cursor-pointer ${
              activeTab === "description"
                ? "underline underline-offset-8"
                : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </h2>

          <h2
            className={`text-xl text-[var(--color-heading)] font-medium font-[var(--font-heading)] cursor-pointer ${
              activeTab === "additional-info"
                ? "underline underline-offset-8"
                : ""
            }`}
            onClick={() => setActiveTab("additional-info")}
          >
            Additional Info
          </h2>

          <h2
            className={`text-xl text-[var(--color-heading)] font-medium font-[var(--font-heading)] cursor-pointer ${
              activeTab === "reviews"
                ? "underline underline-offset-8"
                : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto mt-10">
        {activeTab === "description" && <MoreProductDesc />}

        {activeTab === "additional-info" && (
          <MoreProductAdditionalInfo />
        )}

        {activeTab === "reviews" && <ProductReview />}
      </div>
    </section>
  );
}

export default MoreProductInfo;