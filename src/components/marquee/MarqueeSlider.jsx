import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const MarqueeSlider = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by half height/width so the cursor is centered on the mouse
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.3 });
  };

  // Repeating array to ensure seamless marquee scrolling
  const marqueeItems = [
    { text: "Chasing Consumers", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&h=800&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=71402550445fa031b6e492341292c03e" },
    { text: "Not Algorithms", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&h=800&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=71402550445fa031b6e492341292c03e" },
    { text: "Chasing Consumers", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&h=800&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=71402550445fa031b6e492341292c03e" },
    { text: "Not Algorithms", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&h=800&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=71402550445fa031b6e492341292c03e" },
  ];

  return (
    <section 
      className="bg-[#f0f0f0] py-10 md:py-20 overflow-hidden relative border-t border-black/10 lg:cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* CUSTOM CURSOR - Mint Pill Button */}
      <div 
        ref={cursorRef} 
        className="hidden lg:flex fixed top-0 left-0 bg-[#b2f9e1] text-[#111111] px-6 py-3 rounded-[24px] items-center justify-center gap-2 opacity-0 scale-0 pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <span className="text-base font-medium tracking-tight whitespace-nowrap">Send Us Your Brief</span>
        <span className="text-base font-medium">↗</span>
      </div>

      <div className="w-full flex items-center overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-4 lg:gap-10 px-2 lg:px-5"
          style={{ width: "fit-content" }}
        >
          {/* We render the set twice to create the seamless infinite scroll loop */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <React.Fragment key={index}>
              <h2 className="inline-flex text-[#111111] text-[60px] md:text-[80px] lg:text-[120px] xl:text-[160px] font-medium tracking-tight leading-[0.9] lg:pb-10">
                {item.text}
              </h2>
              <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] md:w-[15vw] lg:w-[12vw] lg:mb-10 lg:rounded-3xl">
                <div className="relative overflow-hidden w-full pt-[100%]">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSlider;
