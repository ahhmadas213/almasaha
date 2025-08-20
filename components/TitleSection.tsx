"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const texts = [
  "هوية تعكس شخصيتك",
  "جودة في كل تفصيلة",
  "أفكار مبتكرة",
  "فن وراحة في مكان واحد",
  "أسلوبك يبدأ من مساحتك",
  "تصاميم تنبض بالحياة",
];

gsap.registerPlugin(ScrollTrigger);

// The horizontalLoop helper function is no longer needed and has been removed.

export default function TitleSection() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const mainRef = useRef(null);
  const marqueeInnerRef = useRef(null); // Ref for the element we will animate
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;

    // --- All existing scroll animations for the section remain the same ---
    gsap.fromTo(
      sectionRef.current,
      { scale: 0.6, borderRadius: "30px" },
      {
        borderRadius: "30px", scale: 1, ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", end: "center center", scrub: true,
        },
      }
    );

    gsap.fromTo(
      sectionRef.current,
      { scale: 1 },
      {
        scale: 0.8, borderRadius: "30px", ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center", end: "bottom 50%", scrub: true,
        },
      }
    );

    gsap.to(mainRef.current, {
      backgroundColor: "#2D2D2D",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom bottom", end: "bottom 90%", scrub: true,
      },
    });

    gsap.to(marqueeRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", scrub: true,
      },
    });
    
    // --- START: NEW SCROLL-DRIVEN HORIZONTAL ANIMATION ---
    // This animation moves the text from left to right across the entire page scroll.
    // When the scrollbar is in the middle, the text will be perfectly centered (x: 0).
    gsap.fromTo(
      marqueeInnerRef.current,
      { x: -300 }, // FROM: Start 300px to the left
      {
        x: 300,    // TO: End 300px to the right
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current, // Use the main container for a full-page trigger
          start: "top top",         // Start animation at the top of the page
          end: "bottom bottom",     // End animation at the bottom of the page
          scrub: 1,                 // Smoothly link animation to scrollbar
        },
      }
    );
    // --- END: NEW ANIMATION ---

  }, [isMounted]);

  return (
    <main ref={mainRef} className="h-screen w-full overflow-hidden bg-primary flex items-center justify-center p-8">
      <section 
        ref={sectionRef} 
        className="h-full w-full relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852799ca4df546168824dc1_hero-bg-sky.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div
            ref={marqueeRef}
            // 1. We add "flex justify-center" to center the inner container by default
            className="absolute left-0 w-full z-10 bg-white py-7 overflow-hidden whitespace-nowrap font-bold text-5xl flex justify-center"
          >
            {/* 2. Add the ref to the div we want to animate */}
            <div ref={marqueeInnerRef} className="marquee_inner flex w-fit">
              {/* 3. We only need one copy of the text now */}
              {isMounted && texts.map((text, i) => (
                  <div
                    key={i}
                    className="marquee_part flex items-center px-8 mr-4 flex-shrink-0"
                  >
                    {text}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center text-white">
          {/* Your content */}
        </div>
      </section>
    </main>
  );
}