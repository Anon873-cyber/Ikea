import { Link } from "react-router-dom";

function Wishlist() {
  const wishlistItems = [];

  return (
    <div className="min-h-[60vh] px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800">My Wishlist</h1>
        <p className="mt-2 text-slate-600">
          Save products you love and come back to them anytime.
        </p>

        {wishlistItems.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed border-slate-200 p-8 text-center">
            <p className="text-lg text-slate-800">Your wishlist is empty.</p>
            <Link
              to="/products"
              className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 p-4"
              >
                <p className="font-medium text-slate-800">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
