import React from "react";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <section className="bg-[#e8eceb] py-24 overflow-hidden relative">
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        {/* What's New Heading */}
        <div className="w-full flex justify-between items-end mt-32 mb-16">
          <h2 className="text-[60px] md:text-[100px] lg:text-[140px] font-black tracking-tighter leading-[0.9] flex items-center gap-4 text-black">
            What's
            <span className="inline-block w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-[30px] overflow-hidden bg-black flex-shrink-0 shadow-xl">
               <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80" alt="New" className="w-full h-full object-cover" />
            </span>
            New
          </h2>
          <button className="hidden md:flex bg-white border border-gray-200 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors duration-300 items-center gap-2 group mb-6">
            Explore More Thoughts <span className="group-hover:translate-x-1 transition-transform duration-300 font-black">↗</span>
          </button>
        </div>

        {/* Blog Posts Carousel */}
        <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing pb-10">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -600 }}
            className="flex gap-8 w-[250%] md:w-[120%] lg:w-full"
          >
            {/* Post 1 */}
            <div className="group cursor-pointer min-w-[300px] flex-1">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" draggable="false" />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="avatar" draggable="false" /></div> Ray Saddiq</span>
                <span className="flex items-center gap-1.5">⏱ 3 mins</span>
              </div>
              <h4 className="text-2xl md:text-[28px] font-black tracking-tight leading-tight group-hover:text-gray-600 transition-colors">
                Rise at Seven Appoints Hollie Lovell as Senior Operations Lead
              </h4>
            </div>

            {/* Post 2 */}
            <div className="group cursor-pointer min-w-[300px] flex-1">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" draggable="false" />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="avatar" draggable="false" /></div> Ray Saddiq</span>
                <span className="flex items-center gap-1.5">⏱ 2 mins</span>
              </div>
              <h4 className="text-2xl md:text-[28px] font-black tracking-tight leading-tight group-hover:text-gray-600 transition-colors">
                Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion
              </h4>
            </div>

            {/* Post 3 */}
            <div className="group cursor-pointer min-w-[300px] flex-1">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" draggable="false" />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=5" alt="avatar" draggable="false" /></div> Carrie Rose</span>
                <span className="flex items-center gap-1.5">⏱ 2 mins</span>
              </div>
              <h4 className="text-2xl md:text-[28px] font-black tracking-tight leading-tight group-hover:text-gray-600 transition-colors">
                Ryan McNamara Is Now Rise at Seven's Global Operations Director
              </h4>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Insights;
