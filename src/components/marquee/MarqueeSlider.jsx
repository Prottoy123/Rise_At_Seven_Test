import React from "react";
import { motion } from "framer-motion";

const MarqueeSlider = () => {
  return (
    <section className="bg-[#f0f0f0] py-20 overflow-hidden relative border-t border-black/10">
      <div className="w-full flex items-center overflow-hidden cursor-grab active:cursor-grabbing group">
        <motion.div
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap group-hover:animation-pause"
          style={{ width: "fit-content" }}
        >
          <span className="text-[120px] md:text-[200px] lg:text-[250px] font-black tracking-tighter leading-none text-black pr-16 flex items-center gap-8">
            Algorithms Chasing Consumers <span className="text-[#b2f9e1]">•</span> Not Algorithms <span className="text-[#b2f9e1]">•</span>
          </span>
          <span className="text-[120px] md:text-[200px] lg:text-[250px] font-black tracking-tighter leading-none text-black pr-16 flex items-center gap-8">
            Algorithms Chasing Consumers <span className="text-[#b2f9e1]">•</span> Not Algorithms <span className="text-[#b2f9e1]">•</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSlider;
