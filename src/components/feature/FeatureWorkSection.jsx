import React from "react";

const AnimatedLink = ({ name, className = "" }) => (
  <span
    className={`hover-link-wrapper cursor-pointer inline-flex items-center gap-1 ${className}`}
  >
    <span className="hover-link-text font-semibold">{name}</span>
  </span>
);

const FeaturedWork = () => {
  return (
    <section className="bg-[#f0f0f0] min-h-[50vh] flex flex-col justify-center py-16 md:py-24 px-4 md:px-6">
      
      {/* 
        Grid Container Replaces Nested Flexbox 
        ডেস্কটপের জন্য লেআউটকে ১২টি কলামে ভাগ করা হয়েছে 
      */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-6 md:gap-x-10 lg:gap-x-20 items-start">
        
        {/* 1. Heading (Mobile: Top [order-1], Desktop: Right Column [col-start-6]) */}
        <div className="col-span-1 md:col-span-7 md:col-start-6 md:row-start-1 order-1 md:order-none">
          <h2 className="text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-medium tracking-tight leading-[0.9] text-[#111111] flex flex-wrap items-center">
            <span className="mr-3">Driving</span>
            <span className="mr-3">Demand</span>
            <span className="mr-3">&</span>
            <span className="mr-3">Discovery</span>
            <span className="inline-flex overflow-hidden rounded-[16px] md:rounded-[30px] w-[50px] h-[35px] md:w-[80px] md:h-[50px] lg:w-[120px] lg:h-[70px] bg-black/10 align-middle shadow-sm mt-1">
              <img
                src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?auto=format&fit=crop&w=400&q=80"
                alt="img"
                className="w-full h-full object-cover"
              />
            </span>
          </h2>
        </div>

        {/* 2. Content (Mobile: Middle [order-2], Desktop: Left Column [col-start-1]) */}
        <div className="col-span-1 md:col-span-5 md:col-start-1 md:row-start-1 md:row-span-2 order-2 md:order-none xl:max-w-xl md:pt-4">
          <p className="text-[18px] lg:text-[24px] xl:text-[32px] font-medium leading-tight tracking-tight text-[#111111] text-balance">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </div>

        {/* 3. Buttons (Mobile: Bottom [order-3], Desktop: Right Column under Heading) */}
        <div className="col-span-1 md:col-span-7 md:col-start-6 md:row-start-2 order-3 md:order-none w-full">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-2 w-full">
            <a href="#" className="w-full md:w-auto group inline-flex shrink-0 justify-center items-center gap-2 overflow-hidden border border-transparent cursor-pointer px-6 py-3 rounded-[24px] hover:rounded-xl transition-all duration-300 bg-white text-[#111111] font-medium text-base h-[48px]">
              <div className="relative overflow-hidden h-[24px]">
                <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">
                  <span className="flex items-center gap-2 h-[24px]">
                    Our Story <span className="text-sm">↗</span>
                  </span>
                  <span className="flex items-center gap-2 h-[24px]">
                    Our Story <span className="text-sm">↗</span>
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="w-full md:w-auto group inline-flex shrink-0 justify-center items-center gap-2 overflow-hidden border border-transparent cursor-pointer px-6 py-3 rounded-[24px] hover:rounded-xl transition-all duration-300 bg-transparent text-[#111111] font-medium text-base h-[48px]">
              <div className="relative overflow-hidden h-[24px]">
                <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">
                  <span className="flex items-center gap-2 h-[24px]">
                    Our Services <span className="text-sm">↗</span>
                  </span>
                  <span className="flex items-center gap-2 h-[24px]">
                    Our Services <span className="text-sm">↗</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;