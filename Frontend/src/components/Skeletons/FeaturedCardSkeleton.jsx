function FeaturedCardSkeleton() {
  return (
    <section className="flex flex-col w-[270px] h-[361px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.10)] ">
      {/* Image Area */}
      <div className="relative flex items-center justify-center h-[236px] bg-[var(--color-surface-alt)]">
        <div className="w-[155px] h-[155px] rounded bg-gray-300"></div>

       
      </div>

      {/* Info Area */}
      <div className="flex flex-col items-center justify-center h-[125px] gap-4 bg-[var(--color-surface)]">
        {/* Product Name */}
        <div className="w-40 h-5 rounded bg-gray-300"></div>

        {/* Price */}
        <div className="w-16 h-4 rounded bg-gray-300"></div>
      </div>
    </section>
  );
}

export default FeaturedCardSkeleton;