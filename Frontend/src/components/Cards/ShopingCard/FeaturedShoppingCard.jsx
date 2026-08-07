import React from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import {useNavigate} from "react-router-dom";

function FeaturedShoppingCard({ productImg, price, productName, productId }) {

  const navigate = useNavigate();
   
  const handleViewDetails = () => {
    navigate(`/product/${productId}`);
    console.log('navigating')
  }
 
  return (
    <section
      className="group flex flex-col w-[270px] h-[361px] overflow-hidden cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.10)]"
    >
      {/* Image Area */}
      <div className="relative flex items-center justify-center pt-4 pb-4 px-4 h-[236px] bg-[var(--color-surface-alt)]">

        {/* Hover Icons */}
        <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          
          <button
            className="bg-[var(--color-surface)] rounded-full p-2 shadow hover:bg-[var(--color-secondary)] hover:text-white transition-colors text-[var(--color-secondary)]"
          >
            <FiShoppingCart size={16} />
          </button>

          <button
            className="bg-[var(--color-surface)] rounded-full p-2 shadow hover:bg-[var(--color-secondary)] hover:text-white transition-colors text-[var(--color-secondary)]"
          >
            <AiOutlineHeart size={16} />
          </button>

          <button
            className="bg-[var(--color-surface)] rounded-full p-2 shadow hover:bg-[var(--color-secondary)] hover:text-white transition-colors text-[var(--color-secondary)]"
          >
            <FiSearch size={16} />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={productImg}
          alt={productName}
          className="w-[155px] h-[155px] object-contain"
        />

        {/* View Details */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleViewDetails}
            className="bg-green-500 text-white text-sm font-semibold px-6 py-2 shadow hover:opacity-90 transition"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Info Area */}
      <div
        className="flex flex-col items-center py-5 px-4 h-[125px] gap-2 transition-colors duration-300 bg-[var(--color-surface)] group-hover:bg-[var(--color-secondary)]"
      >
        <h2
          className="text-base text-center font-bold transition-colors duration-300 text-[var(--color-primary)] group-hover:text-[var(--color-surface)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {productName}
        </h2>

        <p
          className="text-sm font-semibold transition-colors duration-300 text-[var(--color-text-secondary)] group-hover:text-[var(--color-surface)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {`$${price}`}
        </p>
      </div>
    </section>
  );
}
console.log("shopping Cart")
export default FeaturedShoppingCard;