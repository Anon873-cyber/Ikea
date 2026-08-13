import React from "react";
import { Trash2 as TrashIcon } from "lucide-react";

function Item({ item, handleDelete,handleMoveToCart }) {
  console.log("item component");
  console.log(item, "item ");
  return (
    <section className="item">
      <div className="mx-auto flex max-w-6xl gap-6 border-t border-gray-200  p-6">
        {/* Product */}
        <div className="flex flex-1 gap-6">
          <div className="w-40 rounded-xl shrink-0">
            <img
              src={item.images[0].url}
              alt={item.productName}
              className="h-35 w-35 rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-semibold">{item.productName}</h1>

            <p className="mt-2 text-gray-600">{item.productDescription}</p>

            <h2 className="mt-3 text-lg font-bold">₹{item.price}</h2>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 hover:bg-red-100" onClick={handleDelete}>
            <TrashIcon size={20} />
          </button>

          <button className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-white hover:bg-gray-800" onClick={handleMoveToCart}>
            Move to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Item;
