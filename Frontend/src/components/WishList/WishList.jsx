import React from "react";
import useFetch from "../../hooks/useFetch";
import NoWishList from "./NoWishlist";

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
 console.log(data,"data data")
  return <div>Wishlist</div>;
}

export default WishList;
