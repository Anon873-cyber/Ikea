import React, { useState } from "react";
import MoreProductDesc from "../MoreProductDesc/MoreProductDesc";
import MoreProductAdditionalInfo from "../MoreProductAdditionalInfo/MoreProductAdditionalInfo";
import ProductReview from "../ProductReview/ProductReview";
import axios from "../../api/axios.js";
import { useEffect } from "react";
import FeaturedSection from "../Sections/FeaturedSection.jsx";

function MoreProductInfo({ productId }) {
  const [activeTab, setActiveTab] = useState("description");
  const [error, setError] = useState(false);
  const [request, setRequest] = useState(null);
  const [category, setCategory] = useState(null);
  

  useEffect(() => {
    const fetchActiveTab = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/products/${productId}/review`,
          {
            withCredentials: true,
          },
        );
        
        if (response) {
          //console.log(response, "responce");
          setRequest(response.data);
          setCategory(response.data.category);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchActiveTab();
  }, [activeTab]);

  useEffect(() => {
    
  console.log("Request:", request)
    }, [request,activeTab]);
  

  return (
    <section className="MoreProductInfo w-full bg-[#F9F8FE] py-10">
      {/* Tabs */}
      <section className=" flex justify-center items-center flex-col">
        <div className="">
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
                activeTab === "review" ? "underline underline-offset-8" : ""
              }`}
              onClick={() => setActiveTab("review")}
            >
              Reviews
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="container flex items-center justify-center mx-auto mt-10">
          {activeTab === "description" && <MoreProductDesc productId={productId} />}

          {activeTab === "additional-info" && <MoreProductAdditionalInfo />}

          {activeTab === "review" && <ProductReview review={request} />}
        </div>


      </section>
      <section className="Similarproduct">
        <FeaturedSection productQuery={"page=0items=10&category=Furniture"} heading={"Similar products"} arrows={false} />
      </section>
    </section>
  );
}

export default MoreProductInfo;
