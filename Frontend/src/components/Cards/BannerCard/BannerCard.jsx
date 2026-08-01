import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GamingBanner from "../Banner/Banner1";
import SofaBanner from "../Banner/Banner2";

gsap.registerPlugin(useGSAP);

const SLIDE_WIDTH = 1400;
const TOTAL_SLIDES = 4;

function BannerCard() {
  const container = useRef(null);
  const currentIndexRef = useRef(0); // tracks active slide index
  const [activeIndex, setActiveIndex] = useState(0); // for dot UI

  const goToSlide = (index) => {
    const clampedIndex = ((index % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
    currentIndexRef.current = clampedIndex;
    setActiveIndex(clampedIndex);

    gsap.to(container.current, {
      x: -(clampedIndex * SLIDE_WIDTH),
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  useGSAP(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndexRef.current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    <GamingBanner key={0} onClick={() => goToSlide(0)} />,
    <SofaBanner    key={1} onClick={() => goToSlide(1)} />,
    <GamingBanner key={2} onClick={() => goToSlide(2)} />,
    <SofaBanner    key={3} onClick={() => goToSlide(3)} />,
  ];

  return (
    <section className="w-full bg-[var(--color-surface-alt)]  h-[550px]">
      <div className="m-auto w-[1400px]  overflow-hidden  h-[550px] relative">
        <div ref={container} className="flex w-max">
          {slides}
        </div>

        {/* Dots */}
        <div className="dots absolute bottom-5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-4 h-4 rotate-45 transition-colors duration-300 ${
                  activeIndex === i
                    ? "bg-pink-500"
                    : "border-2 border-pink-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerCard;