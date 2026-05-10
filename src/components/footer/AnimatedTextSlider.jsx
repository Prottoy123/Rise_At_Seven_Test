import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextSlider = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const chars = textRef.current.innerText.split("");
      textRef.current.innerText = "";
      
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        textRef.current.appendChild(span);
      });

      // Simple Text Reveal Animation on scroll
      gsap.fromTo(
        textRef.current.children,
        {
          y: 150,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#e8eceb] text-black py-40 md:py-64 flex items-center justify-center relative z-20 overflow-hidden">
      <h2 
        ref={textRef} 
        className="text-[60px] md:text-[100px] lg:text-[180px] font-black tracking-tighter leading-[0.9] text-center px-4 max-w-[1200px]"
      >
        Ready to Rise At Seven?
      </h2>
    </section>
  );
};

export default AnimatedTextSlider;
