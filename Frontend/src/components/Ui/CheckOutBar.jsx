import { ShoppingCart, ArrowRight } from "lucide-react";

function CheckoutBar({
  itemCount = 0,
  total = 0,
  onCheckout=null,
  onContinueShopping=null,
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto flex max-w-7xl items-center gap-6 rounded-2xl border border-gray-200 bg-white/95 px-6 py-4 shadow-[0_-5px_30px_rgba(0,0,0,0.10)] backdrop-blur-md">
        {/* Items */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50">
            <ShoppingCart size={22} className="text-pink-500" />
          </div>

          <div>
            <p className="font-semibold text-gray-900">{itemCount} Items</p>

            <p className="text-sm text-gray-500">In your wishlist</p>
          </div>
        </div>

        {/* Total */}
        <div className="ml-10">
          <p className="text-sm text-gray-500">Total</p>

          <p className="text-lg font-bold text-gray-900">₹{total}</p>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={onContinueShopping}
            className="rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-50"
          >
            Continue Shopping
          </button>

          <button
            onClick={onCheckout}
            disabled={itemCount === 0}
            className="flex items-center gap-2 rounded-lg bg-pink-500 px-7 py-3 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Checkout All
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBar;
