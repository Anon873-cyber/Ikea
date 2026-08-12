import React from "react";
import useFetch from "../../hooks/useFetch";
import NoWishList from "./NoWishlist";
import Item from "../Ui/Item";
import { useState } from "react";

function WishList() {
  const { data, isLoading, error } = useFetch("/cart?wishlist=true");
  const [TotalPrice, setTotalPrice] = useState(0);

  console.log(data, "data response");
  if (isLoading) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>Error , {error}</div>;
  }

  if (!data.length) {
    return <NoWishList />;
  }

  return (
    <section className="Wish-list-items ">
      <div className="container flex flex-col m-auto max-w-6xl  gap-15 py-10">
        <div className="top">
          <h1 className="text-4xl font-medium  font-[var(--font-primary)] ">
            My Wishlist
          </h1>
          <p className="text-gray-600  font-[var(--font-body)]">
            Save products you love and come back to them anytime
          </p>
        </div>

        {data.map((item) => (
          <div>
            <Item item={item.productId} />
          </div>
        ))}
      </div>
      


    </section>
  );
}

export default WishList;
