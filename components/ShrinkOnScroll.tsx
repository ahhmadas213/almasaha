'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealFromUnder() {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const first = firstRef.current;
    const second = secondRef.current;
    const container = containerRef.current;

    if (!first || !second || !container) return;

    container.style.position = "relative";

    // Setup second section behind first
    second.style.position = "absolute";
    second.style.top = "0";
    second.style.left = "50%";
    second.style.transform = "translateX(-50%) scaleX(1.2)"; // slightly larger
    second.style.opacity = "0";
    second.style.zIndex = "-1";

    // Shrink first section
    gsap.to(first, {
      scrollTrigger: {
        trigger: first,
        start: "top top",
        end: "bottom top+=300",
        scrub: true,
      },
      scaleX: 0.6,
      borderRadius: "20px",
      transformOrigin: "center center",
      ease: "none",
    });

    // Reveal second section from under
    gsap.to(second, {
      scrollTrigger: {
        trigger: first,
        start: "bottom top-=100",
        end: "bottom top+=300",
        scrub: true,
      },
      scaleX: 1,       // shrink to normal width
      opacity: 1,      // fade in
      ease: "none",
      zIndex: 0,
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden h-screen">
      <section
        ref={firstRef}
        className="h-screen w-full bg-blue-500 flex items-center justify-center"
      >
        <h1 className="text-white text-4xl">First Section</h1>
      </section>

      <section
        ref={secondRef}
        className="h-screen w-full bg-green-500 flex items-center justify-center"
      >
        <h1 className="text-white text-4xl">Second Section</h1>
      </section>
    </div>
  );
}
