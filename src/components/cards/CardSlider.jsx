import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: 0,
    title: "Pioneers",
    titleColor: "text-white",
    text: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.\n\nWe're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    textColor: "text-white/80",
    bg: "bg-[#111111]",
    rotate: "4deg",
    zIndex: 2,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80&fit=crop",
  },
  {
    id: 1,
    title: "Award Winning",
    titleColor: "text-[#111111]",
    text: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    textColor: "text-[#111111]",
    bg: "bg-[#b2f9e1]",
    rotate: "2deg",
    zIndex: 1,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80&fit=crop",
  },
  {
    id: 2,
    title: "Speed",
    titleColor: "text-[#111111]",
    text: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    textColor: "text-[#111111]",
    bg: "bg-white",
    rotate: "0deg",
    zIndex: 0,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80&fit=crop",
  },
];

const CardItem = ({ card }) => (
  <div
    className={`
      w-full grid p-7
      rounded-2xl lg:rounded-3xl
      lg:items-center lg:aspect-square
      xl:py-10 xl:px-14
      shadow-2xl shadow-black/10
      ${card.bg}
    `}
  >
    <div className="col-start-1 row-start-1 flex flex-col text-center lg:items-center gap-y-3 md:gap-y-5">
      <div className="rounded-xl overflow-hidden w-full aspect-[4/3] relative lg:aspect-square lg:rounded-2xl lg:w-48">
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <h2 className={`text-3xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-none ${card.titleColor}`}>
          {card.title}
        </h2>
        <div className="w-full">
          {card.text.split("\n\n").map((para, i) => (
            <p key={i} className={`text-sm lg:text-base leading-normal mb-5 last:mb-0 ${card.textColor}`}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CardSlider = () => {
  const sectionRef  = useRef(null);
  const itemRefs    = useRef([]);
  const swiperRef   = useRef(null);

  /* ─── Desktop GSAP (Sticky + Staggered Cards) ─── */
  useEffect(() => {
    let ctx = gsap.context(() => {
      const trigger = sectionRef.current;
      if (!trigger) return;

      const items = itemRefs.current.filter(Boolean);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(items, {
        yPercent: -120,
        rotate: -50,
        stagger: 1,
        ease: "power2.inOut",
        duration: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ─── Mobile Swiper (Exact match to live site) ─── */
  useEffect(() => {
    swiperRef.current = new Swiper(".legacy-swiper", {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      speed: 700,
      breakpoints: {
        640: {
          slidesPerView: 1.55,
        },
      },
      pagination: {
        el: ".legacy-pagination",
        type: "progressbar",
      },
    });

    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          /* Override Swiper Progress Bar styles to match site exactly */
          .legacy-pagination.swiper-pagination-progressbar {
            background: rgba(0, 0, 0, 0.1);
            height: 2px;
            position: relative;
            border-radius: 9999px;
            overflow: hidden;
          }
          .legacy-pagination .swiper-pagination-progressbar-fill {
            background: #111111;
            border-radius: 9999px;
            transition-duration: 300ms !important;
          }
        `}
      </style>

      {/* ══ MOBILE (< lg) ══ */}
      <div className="w-full py-10 px-4 md:px-7 lg:hidden bg-[#f3f4f4]">
        <div className="flex justify-center mb-6">
          <h2 className="text-lg font-medium tracking-tight text-[#111111]">
            Legacy In The Making
          </h2>
        </div>

        <div className="swiper legacy-swiper w-full">
          <div className="swiper-wrapper !ease-out">
            {CARDS.map((card) => (
              <div key={card.id} className="swiper-slide !flex !h-auto">
                <CardItem card={card} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full relative mt-5">
          <div className="legacy-pagination swiper-pagination"></div>
        </div>
      </div>

      {/* ══ DESKTOP (lg+) ══ */}
      <div
        ref={sectionRef}
        className="hidden lg:flex relative w-full h-screen bg-[#f3f4f4] overflow-hidden items-center justify-center"
      >
        <div className="absolute top-10 left-0 w-full flex justify-center z-[10]">
          <h2 className="text-lg xl:text-xl font-medium tracking-tight text-[#111111]">
            Legacy In The Making
          </h2>
        </div>

        {CARDS.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className="absolute w-full h-full flex items-center justify-center top-8"
            style={{ zIndex: card.zIndex, willChange: "transform" }}
          >
            <div
              className="w-full max-w-lg xl:max-w-xl transition-shadow"
              style={{ transform: `rotate(${card.rotate})` }}
            >
              <CardItem card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;