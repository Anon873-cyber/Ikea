import React from "react";

function Banner1({ onClick }) {
  return (
    <section
      onClick={onClick}
      className="relative w-[1400px] flex-shrink-0 h-[550px] bg-[var(--color-surface-alt)] overflow-hidden"
    >
      {/* Lamp */}
      <img
        src="/img/lamp.png"
        alt="Lamp"
        className="absolute top-[-3px] left-[-40px] w-[160px] z-10"
      />

      <div className="flex items-center mt-10 justify-between h-full px-16">
        
        {/* Left Content */}
        <div className="max-w-[480px] z-20">
          <p
            className="mb-4 text-[14px] font-semibold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Best Furniture For Your Castle....
          </p>
          <h1
            className="text-[44px] leading-[1.25] font-bold mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            New Furniture Collection Trends in 2020
          </h1>
          <p
            className="text-[15px] leading-7 mb-7"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button
            className="w-[163px] h-[50px] rounded-sm font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "white",
              fontFamily: "var(--font-heading)",
            }}
          >
            Shop Now
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-center w-[500px] flex-shrink-0">
          {/* Circle Background */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              backgroundColor: "var(--color-accent-light)",
              opacity: 0.35,
            }}
          />
          {/* Sofa */}
          <img
            src="/img/primarySofa.png"
            alt="Chair"
            className="relative z-10 w-[420px] object-contain hover:scale-105 transition duration-500"
          />
          {/* Discount Badge */}
          <div
            className="absolute top-10 right-4 w-[80px] h-[80px] rounded-full flex items-center justify-center z-20"
            style={{
              backgroundColor: "var(--color-accent-dark)",
              color: "white",
              fontFamily: "var(--font-heading)",
            }}
          >
            <div className="text-center font-bold text-[22px] leading-5">
              50%
              <br />
              <span className="text-[16px]">off</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dot */}
      <div
        className="absolute left-1 bottom-20 w-3 h-3 rounded-full"
        style={{ backgroundColor: "var(--color-primary)" }}
      />
    </section>
  );
}

export default Banner1;