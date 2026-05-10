import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Pioneers",
    text: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.\n\nWe're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    bgColor: "bg-black text-white",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80",
    rotation: "-2deg"
  },
  {
    title: "Award Winning",
    text: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    bgColor: "bg-[#b2f9e1] text-black",
    image: null,
    rotation: "1deg"
  },
  {
    title: "Speed",
    text: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
    bgColor: "bg-white text-black",
    image: null,
    rotation: "4deg"
  }
];

const CardSlider = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      // Animate cards stacking
      cardsRef.current.forEach((card, i) => {
        if (i === 0) return; // First card stays
        
        // Start each card offscreen
        gsap.set(card, { y: window.innerHeight });

        tl.to(
          card,
          {
            y: 0,
            ease: "none",
          },
          `label${i}`
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#e8eceb] h-screen overflow-hidden relative flex flex-col items-center justify-center pt-20">
      <p className="text-xl md:text-2xl font-bold tracking-tight mb-8 text-center absolute top-20 left-1/2 -translate-x-1/2 z-50">
        Legacy In The Making
      </p>

      <div className="relative w-full max-w-[600px] aspect-[4/5] md:aspect-[3/4] flex justify-center items-center mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute w-[90%] h-[100%] rounded-[40px] shadow-2xl p-8 md:p-12 flex flex-col justify-end transform transition-transform duration-500 hover:scale-[1.02] ${card.bgColor}`}
            style={{ 
              zIndex: index,
              transform: `rotate(${card.rotation})` 
            }}
          >
            {card.image && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-2xl overflow-hidden border border-white/20">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className={`flex flex-col ${card.image ? 'items-center text-center' : 'items-start text-left'}`}>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{card.title}</h3>
              <p className={`text-sm md:text-base font-medium leading-relaxed ${card.image ? 'max-w-[400px] text-gray-300 whitespace-pre-line' : 'font-semibold'}`}>
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSlider;
