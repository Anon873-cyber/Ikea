import React from "react";
import { Link } from "react-router-dom";

function NoWishList() {
  return (
    <div className="min-h-[60vh] px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800">My Wishlist</h1>
        <p className="mt-2 text-slate-600">
          Save products you love and come back to them anytime.
        </p>

        <div className="mt-8 rounded-xl border border-dashed border-slate-200 p-8 text-center">
          <p className="text-lg text-slate-800">Your wishlist is empty.</p>
          <Link
            to="/products"
            className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoWishList;
