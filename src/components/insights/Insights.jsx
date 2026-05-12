import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css/bundle";
import gsap from "gsap";

const Insights = () => {
  const swiperRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Custom Cursor tracking
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    // Exact matching Swiper config from the live site
    swiperRef.current = new Swiper(".insights-swiper", {
      slidesPerView: 1.15,
      spaceBetween: 15,
      loop: true,
      speed: 700,
      breakpoints: {
        640: { slidesPerView: 2.15 },
        1024: { slidesPerView: 3.15 },
        1280: { slidesPerView: 3.15 },
      },
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.3 });
  };

  return (
    <section className="bg-[#e8eceb] py-20 md:py-32 overflow-hidden relative lg:cursor-default">
      
      {/* CUSTOM CURSOR */}
      <div 
        ref={cursorRef} 
        className="hidden lg:flex fixed top-0 left-0 w-[100px] h-[100px] -ml-[50px] -mt-[50px] bg-black text-white rounded-full items-center justify-center opacity-0 scale-0 pointer-events-none z-[9999]"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
      
      {/* Header Section (Constrained) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-7 mb-12 md:mb-16">
        <div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-6">
          <h2 className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-medium tracking-tight leading-[0.9] flex flex-wrap items-center text-[#111111]">
            <span className="mr-3">What's</span>
            <span className="inline-flex overflow-hidden rounded-[20px] md:rounded-[40px] w-[80px] h-[50px] md:w-[120px] md:h-[70px] lg:w-[150px] lg:h-[90px] mr-3 bg-black/10 align-middle shadow-lg">
               <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80" alt="New" className="w-full h-full object-cover" />
            </span>
            <span>New</span>
          </h2>
          
          <a href="#" className="group inline-flex shrink-0 justify-center items-center gap-2 overflow-hidden border border-transparent cursor-pointer px-6 py-3 rounded-full hover:rounded-xl transition-all duration-300 bg-white text-[#111111] font-medium text-base h-[48px]">
            <div className="relative overflow-hidden h-[24px]">
              <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">
                <span className="flex items-center gap-2 h-[24px]">
                  Explore More Thoughts <span className="text-sm">↗</span>
                </span>
                <span className="flex items-center gap-2 h-[24px]">
                  Explore More Thoughts <span className="text-sm">↗</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Swiper Carousel (Edge to Edge) */}
      <div className="w-full pb-10">
        <div 
          className="swiper insights-swiper !overflow-visible"
          style={{ paddingLeft: "max(1rem, calc((100vw - 1440px) / 2 + 1.75rem))" }}
        >
          <div className="swiper-wrapper !ease-out">
              
              {/* Post 1 */}
              <div className="swiper-slide !h-auto">
                <a 
                  href="#" 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="group flex flex-col w-full cursor-pointer transition-transform duration-500 hover:-translate-y-2 lg:cursor-none"
                >
                  <div className="w-full aspect-square rounded-2xl lg:rounded-3xl overflow-hidden mb-6 relative bg-black shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                      alt="Blog 1" 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-md group-hover:opacity-70" 
                      draggable="false" 
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=1" alt="Ray" />
                      </div>
                      Ray Saddiq
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      3 mins
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl lg:text-[32px] font-medium tracking-tight leading-[1.1] text-[#111111]">
                    Rise at Seven Appoints Hollie Lovell as Senior Operations Lead
                  </h4>
                </a>
              </div>

              {/* Post 2 */}
              <div className="swiper-slide !h-auto">
                <a 
                  href="#" 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="group flex flex-col w-full cursor-pointer transition-transform duration-500 hover:-translate-y-2 lg:cursor-none"
                >
                  <div className="w-full aspect-square rounded-2xl lg:rounded-3xl overflow-hidden mb-6 relative bg-black shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" 
                      alt="Blog 2" 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-md group-hover:opacity-70" 
                      draggable="false" 
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=1" alt="Ray" />
                      </div>
                      Ray Saddiq
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      2 mins
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl lg:text-[32px] font-medium tracking-tight leading-[1.1] text-[#111111]">
                    Rise at Seven Exits Sheffield and Triples Manchester as new HQ
                  </h4>
                </a>
              </div>

              {/* Post 3 */}
              <div className="swiper-slide !h-auto">
                <a 
                  href="#" 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="group flex flex-col w-full cursor-pointer transition-transform duration-500 hover:-translate-y-2 lg:cursor-none"
                >
                  <div className="w-full aspect-square rounded-2xl lg:rounded-3xl overflow-hidden mb-6 relative bg-black shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" 
                      alt="Blog 3" 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-md group-hover:opacity-70" 
                      draggable="false" 
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=5" alt="Carrie" />
                      </div>
                      Carrie Rose
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      2 mins
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl lg:text-[32px] font-medium tracking-tight leading-[1.1] text-[#111111]">
                    Ryan McNamara Is Now Rise at Seven's Global Operations Director
                  </h4>
                </a>
              </div>



            </div>
          </div>
        </div>

    </section>
  );
};

export default Insights;
