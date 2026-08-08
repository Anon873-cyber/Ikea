import React from "react";
import ProductSection from "../components/Sections/ProductSecton";
import MoreProductInfo from "../components/MoreProductInfo/MoreProductInfo.jsx";
import { useParams } from "react-router-dom";
import FeaturedSection from "../components/Sections/FeaturedSection.jsx";
import { useState, useEffect } from "react";
import api from "../api/axios.js";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
 

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`/products/${productId}`, {
       
        });
        setProduct(response.data.data[0]);
        setLoading(false);
      } catch (err) {
            console.log(error,"error message")
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();

    
  }, [productId]); 
  if (loading) {
    return (
      <section className="flex flex-col justify-center mt-15 gap-9">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex flex-col justify-center mt-15 gap-9">
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

 
  if (!product) {
    return (
      <section className="flex flex-col justify-center mt-15 gap-9">
        <p className="text-red-500">Product not found.</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col justify-center mt-15 gap-20">
      <ProductSection className="w-full my-15"
        images={product?.images}
        price={product?.price}
        name={product?.productName}
        description={product?.productDescription}
        category={product?.category}
        tags={product?.tags}
      />
      <MoreProductInfo productId={productId} />
      
      <section className="Similarproduct">
        <FeaturedSection
          productQuery={"page=0items=10&category=" + product?.category}
          heading={"Similar products"}
          arrows={false}
        />
      </section>
    </section>
  );
}

export default ProductDetails;