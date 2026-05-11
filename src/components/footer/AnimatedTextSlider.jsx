import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Exact replication of riseatseven.com "Ready to Rise at Seven?" section.
 *
 * Source extracted directly from riseatseven.com HTML source (line 11671-11742).
 *
 * The animation works as follows:
 * 1. Heading starts to the RIGHT of screen (x = headingWidth - windowWidth + windowWidth*0.5)
 *    and slightly BELOW (y = 150px on desktop)
 * 2. As user scrolls, heading slides LEFT (to x = -(headingWidth - windowWidth + 1000))
 *    and further DOWN (to y = 400px)
 * 3. Simultaneously each character starts yPercent:-60 (above) + rotate:10
 *    and settles to yPercent:0 + rotate:0 with back.inOut(4) ease and stagger:0.35
 */

const TEXT = "Ready to Rise at Seven?";

const AnimatedTextSlider = () => {
  const outerRef   = useRef(null); // overflow-hidden wrapper
  const triggerRef = useRef(null); // scroll trigger target (h-[100vh])
  const headingRef = useRef(null); // the actual text element

  useEffect(() => {
    const outer   = outerRef.current;
    const trigger = triggerRef.current;
    const heading = headingRef.current;

    const init = () => {
      // Use offsetWidth — same as live site's heading.offsetWidth
      const headingWidth = heading.offsetWidth;
      const windowWidth  = window.innerWidth;
      const windowHeight = window.innerHeight;

      const isDesktop = windowWidth >= 1024;

      // Values matching live site exactly
      const yStart     = isDesktop ? 150 : 100;
      const yEnd       = isDesktop ? 400 : 200;
      const charyStart = -60;

      // 1. Position heading: off to the right + below
      gsap.set(heading, {
        y: yStart,
        x: headingWidth - windowWidth + windowWidth * 0.5,
      });

      // 2. Slide heading left+down as scroll progresses
      gsap.to(heading, {
        x: -(headingWidth - windowWidth + 1000),
        y: yEnd,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top 70%",
          end: "+=" + Math.max(200, headingWidth - windowWidth + windowHeight * 0.35),
          scrub: true,
        },
      });

      // 3. All chars start above their position + slightly rotated
      const chars = heading.querySelectorAll(".r-char");
      gsap.set(chars, {
        yPercent: charyStart,
        rotation: 10,
        transformOrigin: "50% 0%",
      });

      // 4. Chars drop into place with stagger (exactly matching live site)
      gsap.to(chars, {
        yPercent: 0,
        rotation: 0,
        ease: "back.inOut(4)",
        stagger: 0.35,
        duration: 2.5,
        scrollTrigger: {
          trigger: trigger,
          start: "top 77%",
          end: "+=" + Math.max(200, headingWidth - windowWidth + 200),
          scrub: true,
        },
      });
    };

    // Wait for layout + fonts before measuring offsetWidth
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(init));
    } else {
      setTimeout(init, 200);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(headingRef.current);
    };
  }, []);

  return (
    /*
     * Outer: overflow-hidden clips text that is off to the right
     * bg-grey-100 on live site = approximately #eaeaea / #f0f0f0
     */
    <div ref={outerRef} className="overflow-hidden bg-[#eaeaea]">
      {/*
       * Trigger div: h-[100vh] on desktop — scroll trigger measures this
       * flex so the heading sits inside it
       */}
      <div
        ref={triggerRef}
        className="flex h-[35vh] lg:h-[100vh]"
      >
        {/*
         * Heading: shrink-0 so it stays full-width even in flex
         * text-[30vw] mobile, text-[16vw] desktop — exact from live site
         * overflow-hidden so yPercent:-60 chars don't show above the line
         */}
        <h2
          ref={headingRef}
          className="shrink-0 overflow-hidden text-[30vw] lg:text-[16vw] font-medium tracking-tight leading-tight text-black whitespace-nowrap"
        >
          {TEXT.split("").map((ch, i) => (
            <span
              key={i}
              className="r-char inline-block will-change-transform"
              style={{
                display: "inline-block",
                // Preserve space width
                minWidth: ch === " " ? "0.3em" : undefined,
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default AnimatedTextSlider;