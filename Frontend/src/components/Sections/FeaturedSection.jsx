import React, { useState, useEffect } from "react";
import FeaturedShoppngCard from "../Cards/ShopingCard/FeaturedShoppingCard";
import api from "../../api/axios.js";
import CardSkletion from "../Skletons/FeaturedCartSkleton.jsx";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function FeaturedSection({productQuery}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `/products/search/?${productQuery}`,
          {
            signal: controller.signal,
          },
        );

        setProducts(response.data.data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err.message);
        }
      } finally {
        console.log(products);
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const nextSlide = () => {
    emblaApi.scrollNext();
  };

  const previousSlide = () => {
    emblaApi.scrollPrev();
  };
  if (loading)
    return (
      <section className=" flex flex-col justify-center items-center mt-15 gap-9">
        <h2 className="text-[42px] text-center font-bold text-[var(--color-heading)]">
          Featured Products
        </h2>
        <div className=" flex  gap-9 items-center justify-center">
          <CardSkletion />
          <CardSkletion />
          <CardSkletion />
          <CardSkletion />
        </div>
      </section>
    );
  if (error)
    return (
      <section className=" flex flex-col  max-w-[1170px] justify-center mt-15 gap-9">
        <h2 className="text-[42px] text-center font-bold text-[var(--color-heading)]">
          Featured Products
        </h2>
        <p className="text-center text-red-600 font-medium">Error: {error}</p>
      </section>
    );

  return (
    <section className=" flex flex-col  max-w-7.5xl   m-auto  itens-center justify-center mt-15 gap-9">
      <h2 className="text-[42px] text-center font-bold text-[var(--color-heading)]">
        Featured Products
      </h2>
      <div className="conatiner flex justify-center items-center gap-3">
        <div className=" lef button">
          <button
            onClick={previousSlide}
            aria-label="Previous slide"
            className="px-4 py-2 rounded bg-gray-200"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="overflow-hidden w-[1200px] " ref={emblaRef}>
          <div className="flex p-2">
            {products.map((product) => (
              <div key={product.id} className=" px-4 flex-shrink-0">
                <FeaturedShoppngCard
                 productId={product._id}
                  productImg={product.images[0].url}
                  price={product.price}
                  productName={product.productName}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="right-button">
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="px-4 py-2 rounded bg-gray-200"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
