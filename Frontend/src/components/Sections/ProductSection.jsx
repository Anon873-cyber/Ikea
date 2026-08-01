import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
} from "react-icons/fa";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

export default function ProductSection({
  images = [],
  name,
  price,
  description,
  reviews = [],
  category,
  tags = [],
}) {
  const [mainImage, setMainImage] = useState(images[0]);

  // Support price as either a plain number or { current, original }
  const currentPrice = typeof price === "object" ? price?.current : price;
  const originalPrice = typeof price === "object" ? price?.original : null;

  const reviewCount = reviews?.length ?? 0;
  const avgRating =
    reviewCount > 0
      ? Math.round(
          reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0) / reviewCount
        )
      : 5;

  return (
    <section className="max-w-6xl mx-auto rounded-md shadow-2xl p-2">
      <div className="flex gap-3">
        <div className="conatainer h-[487px] flex gap-3">
          {/* Left Gallery */}
         
              <div className="flex flex-col gap-3 max-h-[487] overflow-hidden rounded-md max-w-[151px]">
            {images.map((img, index) => (
              <div
              key={index}
              onClick={() => setMainImage(img)}
              className="flex-shrink-0 w-[151px] h-[155px] bg-[var(--color-surface-alt)] rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={`${name ?? "Product"} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  />
              </div>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="bg-[var(--color-surface-alt)] rounded-md overflow-hidden w-[375px]">
            <img
              src={mainImage.url}
              alt={name ?? "Product"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[34px] font-[var(--font-heading)] font-bold text-[var(--color-heading)]">
            {name}
          </h1>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  fill={i < avgRating ? "currentColor" : "none"}
                  strokeWidth={i < avgRating ? 0 : 1.5}
                />
              ))}
            </div>
            <span className="text-xs text-[var(--color-text-secondary)]">
              ({reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-lg text-[var(--color-heading)] font-semibold">
              ${Number(currentPrice ?? 0).toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[var(--color-danger)] line-through">
                ${Number(originalPrice).toFixed(2)}
              </span>
            )}
          </div>


          <p className="mt-4 leading-8 text-[15px] text-gray-400 max-w-md">
            {description}
          </p>

          <div className="flex items-center gap-6 mt-8">
            <button
              className="px-6 py-2 border border-[var(--color-heading)]
          text-[var(--color-heading)] rounded hover:bg-[var(--color-heading)]
          hover:text-white transition"
            >
              Add To Cart
            </button>
            <button className="text-[var(--color-heading)] hover:text-[var(--color-primary)] transition">
              <Heart size={20} />
            </button>
          </div>

          <div className="mt-8 space-y-3">
            <p className="font-semibold text-[var(--color-heading)]">
              Categories: <span className="font-normal">{category}</span>
            </p>

            {tags.length > 0 && (
              <p className="font-semibold text-[var(--color-heading)]">
                Tags:{" "}
                <span className="font-normal">{tags.join(", ")}</span>
              </p>
            )}

            <div className="flex items-center gap-3">
              <span className="font-semibold text-[var(--color-heading)]">
                Share
              </span>
              <Facebook size={15} className="cursor-pointer text-blue-600" />
              <Instagram size={15} className="cursor-pointer text-pink-500" />
              <Twitter size={15} className="cursor-pointer text-sky-500" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}