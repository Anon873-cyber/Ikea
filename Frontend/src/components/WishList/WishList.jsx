import React from "react";
import useFetch from "../../hooks/useFetch";
import NoWishList from "./NoWishlist";
import Item from "../Ui/Item";

function WishList() {
  const { data, isLoading, error } = useFetch("/cart");

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>Error , {error}</div>;
  }

  if (!data.length) {
    return <NoWishList />;
  }
  console.log(data, "data data");
  return (
    <section className="Wish-list-items">
      <div className="top">
        <h1 className="[font-family:var(--font-primary)]">My Wishlist</h1>
        <p>Save products you love and come back to them anytime</p>
      </div>
      {data.data.map((item) => {
        <Item item={item} />;
      })}
    </section>
  );
}

export default WishList;
