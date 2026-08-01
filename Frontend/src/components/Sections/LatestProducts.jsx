import NewProductCard from "../Cards/ShoppingCard/NewProductCard";
import { useState, useEffect } from "react";
import api from "../../api/axios.js";

function LatestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("new");

  //create a hook to fetch the latest products from the backend
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `/products/search/?page=0&items=6`,
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
       
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, [search]);

  return (
    <section>
      <h2 className="text-[42px] mt-15 text-center font-bold text-[var(--color-heading)]">
        Latest Products
      </h2>
      <div className="w-full flex justify-center">
        <div className="product-type flex gap-5">
          <h3
          onClick={() => setSearch("new")}
            className={`font-[var(--font-body)] text-nowrap  cursor-pointer  ${search === "new" ? "text-[var(--color-primary)]  underline" : "text-[var(--color-heading)]"}  `}
          >
            New Arrival
          </h3>
          <h3
            onClick={() => setSearch("best")}
            className={`font-[var(--font-body)] text-nowrap  cursor-pointer ${search === "best" ? "text-[var(--color-primary)] underline" : "text-[var(--color-heading)]"}  `}
          >
            Best Seller
          </h3>
          <h3
            onClick={() => setSearch("featured")}
            className={`font-[var(--font-body)] text-nowrap  cursor-pointer  ${search === "featured" ? "text-[var(--color-primary)] underline" : "text-[var(--color-heading)]"}  `}
          >
            Featured
          </h3>
          <h3
            onClick={() => setSearch("offer")}
            className={`font-[var(--font-body)] text-nowrap   cursor-pointer ${search === "offer" ? "text-[var(--color-primary)] underline" : "text-[var(--color-heading)]"}  `}
          >
            Special Offer
          </h3>
        </div>
      </div>
      <div className="products flex flex-wrap gap-9 justify-center items-center max-w-[1200px] mx-auto mt-9">
        
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : (
      
            products.map((product) => (
          
              <NewProductCard
                key={product._id}
                productImg={product.images[0].url}
                productName={product.productName}
                price={product.price}
                discount={product.discount || 10}
              />
            ))
          )}
      </div>
    </section>
  );
}

export default LatestProducts;
