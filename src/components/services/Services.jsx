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
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-[50px] md:text-[80px] lg:text-[120px] font-black tracking-tighter leading-none flex items-center flex-wrap gap-2 md:gap-4">
            Our 
            <div className="w-[40px] md:w-[70px] h-[60px] md:h-[100px] rounded-full overflow-hidden inline-block align-middle mt-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80" 
                alt="People working" 
                className="w-full h-full object-cover"
              />
            </div>
            Services
          </h2>
          <button className="bg-white border border-gray-200 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors duration-300 flex-shrink-0 group flex items-center gap-2 z-20 relative">
            View All Services <span className="group-hover:translate-x-1 transition-transform duration-300 font-black">↗</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 relative z-10">
          {/* Column 1 */}
          <div>
            {servicesList1.map((service, index) => (
              <div key={index} className="border-t border-black/20 py-6 md:py-10 group cursor-pointer flex justify-between items-center relative rounded-full transition-all duration-500 hover:px-8 hover:-mx-8">
                {/* Hover Background Image */}
                <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tighter transition-all duration-500 group-hover:text-white relative z-10">
                  {service.name}
                </h3>
                <div className="w-12 h-12 rounded-full bg-[#b2f9e1] text-black flex items-center justify-center opacity-0 -translate-x-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-xl font-bold relative z-10">
                  ↗
                </div>
              </div>
            ))}
          </div>
          {/* Column 2 */}
          <div>
            {servicesList2.map((service, index) => (
              <div key={index} className="border-t border-black/20 py-6 md:py-10 group cursor-pointer flex justify-between items-center relative rounded-full transition-all duration-500 hover:px-8 hover:-mx-8">
                 {/* Hover Background Image */}
                 <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tighter transition-all duration-500 group-hover:text-white relative z-10">
                  {service.name}
                </h3>
                <div className="w-12 h-12 rounded-full bg-[#b2f9e1] text-black flex items-center justify-center opacity-0 -translate-x-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-xl font-bold relative z-10">
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
