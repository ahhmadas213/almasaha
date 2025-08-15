"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TitleSection() {
  const sectionRef = useRef(null);
  const clipContainerRef = useRef(null);
  const backgroundRef = useRef(null);
  const marqueeRef = useRef(null);
  const mainRef = useRef(null);

  useGSAP(() => {
    gsap.set(backgroundRef.current, { clipPath: "round(30px)" });

    // SHRINK animation when section is leaving viewport
   // Grow when coming into view
    gsap.fromTo(
      sectionRef.current,
      { scale: 0.6 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",    // section starts entering viewport
          end: "center center",   // fully grown by the time center hits center
          scrub: true,
        },
      }
    );

    // Shrink when leaving
    gsap.fromTo(
      sectionRef.current,
      { scale: 1 },               // start exactly at full size
      {
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center", // starts right where grow animation ends
          end: "bottom 50%",      // shrink finishes halfway out
          scrub: true,
        },
      }
    );
            

    // OPTIONAL: background color change synced with shrink
    gsap.to(mainRef.current, {
      backgroundColor: "#2D2D2D",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: "bottom 100%",
        scrub: true,

      },
    });


    // Move white marquee strip slightly with scroll
    gsap.to(marqueeRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        scrub: true,
      },
    });

    // Infinite horizontal scrolling text
    const parts = gsap.utils.toArray(".marquee_part");
    gsap.to(parts, {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });
    gsap.set(".marquee_inner", { xPercent: 50 });
  }, []);

  return (
    <main ref={mainRef} className="h-screen w-full overflow-hidden bg-green-200">
      <section ref={sectionRef} className="h-full relative overflow-hidden">
        {/* Clip-path background */}
        <div ref={clipContainerRef} className="absolute inset-0 w-full h-full">
          <div
            ref={backgroundRef}
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852799ca4df546168824dc1_hero-bg-sky.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "30px",
            }}
            className="w-full h-full"
          ></div>
        </div>

        {/* Marquee Strip */}
        <div className="w-full h-full flex items-center justify-center">
          <div
            ref={marqueeRef}
            className="absolute left-0 w-full z-10 bg-white py-7 overflow-hidden whitespace-nowrap font-bold text-5xl"
          >
            <div className="marquee_inner flex w-fit">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="marquee_part flex items-center px-4 flex-shrink-0"
                >
                  تصميم أنيق
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative w-full h-full flex items-center justify-center text-white">
          {/* Your content */}
        </div>
      </section>
    </main>
  );
}
