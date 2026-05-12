import React from "react";
import { motion } from "framer-motion";

const LogoSlider = () => {
  const logos = [
    { name: "Emirates", url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" },
    { name: "Shark Ninja", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/SharkNinja_Logo.png" },
    { name: "Capital One", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg" },
    { name: "Red Bull", url: "https://upload.wikimedia.org/wikipedia/en/f/f5/Red_Bull_Racing_logo.svg" },
    { name: "JD Sports", url: "https://upload.wikimedia.org/wikipedia/en/0/0e/JD_Sports_logo.svg" },
    { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
    { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  ];

 
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#f0f0f0] py-10 md:py-16 overflow-hidden border-b border-black/10 select-none">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        
        {/* Left Fixed Text */}
        <div className="shrink-0 z-10 w-full md:w-auto text-left">
          <p className="text-sm font-medium text-[#111111] tracking-tight sm:max-w-32">
            The agency behind ...
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative flex-1 overflow-hidden w-full">
          <motion.div
            className="flex items-center gap-12 md:gap-20 w-max cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ right: 0, left: -2000 }}
            animate={{ x: ["0%", "-33.33%"] }} 
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, 
                ease: "linear",
              }
            }}
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 md:w-24 aspect-[20/9] flex items-center justify-center transition-all duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-full h-full object-contain pointer-events-none brightness-0 opacity-90"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Edge gradients to blend with background if necessary */}
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#f0f0f0] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#f0f0f0] to-transparent pointer-events-none z-10 md:hidden" />
        </div>

      </div>
    </div>
  );
};

export default LogoSlider;