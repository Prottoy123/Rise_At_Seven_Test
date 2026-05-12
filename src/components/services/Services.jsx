import React from "react";

const servicesList1 = [
  { name: "Digital PR", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" },
  { name: "Search & Growth Strategy", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
  { name: "Data & Insights", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" }
];

const servicesList2 = [
  { name: "Organic Social & Content", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
  { name: "Content Experience", image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80" },
  { name: "Onsite SEO", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80" }
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-[#f0f0f0]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:grid md:grid-cols-2 md:items-end">
        
        {/* ১. Heading */}
        <div className="order-1 pb-6 md:pb-10">
          <h2 className="text-[45px] md:text-[65px] lg:text-[100px] font-medium tracking-tighter leading-[0.9] flex items-center flex-wrap gap-2 md:gap-3 lg:gap-4 text-[#111111]">
            Our 
            <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[65px] lg:h-[65px] rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden inline-flex items-center justify-center shadow-sm -mt-1 md:-mt-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80" 
                alt="People working" 
                className="w-full h-full object-cover"
              />
            </div>
            Services
          </h2>
        </div>

        {/* 
            ২. Button (Vertical Jump Hover Effect) 
            হোভার করলে আর ব্যাকগ্রাউন্ড ব্ল্যাক হবে না। 
            ভিতরের overflow-hidden div-এর কারণে টেক্সট সুন্দরভাবে উপরে স্ক্রল করে উঠবে।
        */}
        <div className="order-4 md:order-2 flex justify-center md:justify-end pb-0 md:pb-10 mt-8 md:mt-0">
          <button className="w-full md:w-auto bg-white border border-gray-200 text-black px-4 py-3 md:px-6 md:py-3 rounded-full font-bold text-sm flex-shrink-0 group flex items-center justify-center z-20 relative cursor-pointer">
            <div className="relative overflow-hidden h-[24px]">
              <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">
                {/* Initial Text */}
                <span className="flex items-center justify-center gap-2 h-[24px]">
                  View All Services <span className="font-black text-lg leading-none">↗</span>
                </span>
                {/* Hover Text (Jumps up from below) */}
                <span className="flex items-center justify-center gap-2 h-[24px]">
                  View All Services <span className="font-black text-lg leading-none">↗</span>
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* ৩. Main Divider Line */}
        <div className="order-2 md:order-3 md:col-span-2 w-full h-[1px] bg-black/20 mb-2 md:mb-10"></div>

        {/* ৪. Services Grid */}
        <div className="order-3 md:order-4 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 relative z-10 w-full">
          
          {/* Column 1 */}
          <div>
            {servicesList1.map((service, index) => (
              <div key={index} className={`py-6 md:py-8 group cursor-pointer flex justify-between items-center relative transition-all duration-500 hover:px-6 hover:-mx-6 ${index === 0 ? '' : 'border-t border-black/20'}`}>
                <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-[48px] font-medium tracking-tight transition-all duration-500 group-hover:text-white relative z-10">
                  {service.name}
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#b2f9e1] text-black flex items-center justify-center opacity-0 -translate-x-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-lg font-bold relative z-10">
                  ↗
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            {servicesList2.map((service, index) => (
              <div key={index} className={`py-6 md:py-8 group cursor-pointer flex justify-between items-center relative transition-all duration-500 hover:px-6 hover:-mx-6 ${index === 0 ? 'border-t border-black/20 md:border-t-0 md:border-transparent' : 'border-t border-black/20'}`}>
                 <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-[48px] font-medium tracking-tight transition-all duration-500 group-hover:text-white relative z-10">
                  {service.name}
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#b2f9e1] text-black flex items-center justify-center opacity-0 -translate-x-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-lg font-bold relative z-10">
                  ↗
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;