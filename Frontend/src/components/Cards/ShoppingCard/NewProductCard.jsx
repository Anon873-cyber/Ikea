import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

function NewProductCard({
  productImg,
  productName,
  price,
  oldPrice = 100,
}) {
  return (
    <div className="group w-[360px] cursor-pointer relative">
      {/* Image Container */}
      <div className="bg-[var(--color-surface)] border border-gray-100 rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="bg-[var(--color-surface-alt)] h-[300px] flex items-center justify-center p-8">
          <img
            src={productImg}
            alt={productName}
            className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 flex items-center justify-between">
        <h3
          className="text-[22px] font-medium text-[var(--color-heading)] truncate"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {productName}
        </h3>

        <div className="flex items-center gap-2">
          <span
            className="text-[22px] font-semibold text-[var(--color-heading)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ${price}
          </span>

          {oldPrice && (
            <span
              className="text-[18px] text-[var(--color-danger)] line-through"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
      {/* Hover Icons */}
      <div className="absolute top-38 left-3 flex flex-col gap-2 transition-opacity opacity-0 group-hover:opacity-100 duration-300">
        <button className="bg-[var(--color-surface)] rounded-full p-2 shadow hover:bg-[var(--color-secondary)] hover:text-white transition-colors text-[var(--color-secondary)]">
          <FiShoppingCart size={16} />
          
        </button>

        <button className="bg-[var(--color-surface)] rounded-full p-2 shadow hover:bg-[var(--color-secondary)] hover:text-white transition-colors text-[var(--color-secondary)]">
          <AiOutlineHeart size={16} />
        </button>

        <button className="bg-[var(--color-surface)] rounded-full p-2 shadow hover:bg-[var(--color-secondary)] hover:text-white transition-colors text-[var(--color-secondary)]">
          <FiSearch size={16} />
        </button>
      </div>
    </div>
  );
}

export default NewProductCard;
