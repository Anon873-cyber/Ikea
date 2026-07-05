import React from "react";

function GamingBanner({ onClick }) {
  return (
    <section
      onClick={onClick}
      className="relative w-[1400px] h-[550px] overflow-hidden bg-[var(--color-surface-alt)] flex-shrink-0"
    >
      <div className="h-full mx-auto flex items-center justify-between px-16">
        
        {/* Decorative Glow */}
        <div className="absolute right-[180px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#6C63FF]/10" />

        {/* Left Content */}
        <div className="max-w-[480px] z-20">
          <span className="text-pink-600 font-semibold tracking-wide uppercase">
            Best Gaming Collection 2026
          </span>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
            Hear Every
            <br />
            Victory.
          </h1>
          <p className="mt-5 text-gray-500 text-base leading-7">
            Experience crystal-clear surround sound, lightweight comfort,
            powerful bass and a premium microphone made for serious gamers.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="px-8 py-3 bg-pink-600 text-white rounded-md font-semibold hover:bg-pink-700 transition">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 rounded-md font-semibold hover:bg-pink-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Product */}
        <div className="relative w-[520px] flex justify-center items-center flex-shrink-0">
          {/* Large Circle */}
          <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-300/30 to-violet-300/20" />
          {/* Small Ring */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-200" />
          {/* Headset */}
          <img
            src="/img/headset.png"
            alt="Gaming Headset"
            className="relative z-10 w-[400px] object-contain hover:scale-105 transition duration-500"
          />
          {/* Discount Badge */}
          <div className="absolute right-4 top-8 w-24 h-24 rounded-full bg-pink-600 text-white flex flex-col justify-center items-center shadow-xl z-20">
            <span className="text-3xl font-bold">40%</span>
            <span className="uppercase tracking-widest text-xs">OFF</span>
          </div>
        </div>
      </div>

      {/* Decorative Dot */}
      <div className="absolute left-16 bottom-24 w-3 h-3 rounded-full bg-pink-600" />
    </section>
  );
}

export default GamingBanner;