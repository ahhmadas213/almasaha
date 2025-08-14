"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// SplitType is no longer needed, so we can remove it.
// import SplitType from "split-type"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const leftOverlayRef = useRef<HTMLDivElement | null>(null);
  const rightOverlayRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !leftOverlayRef.current || !rightOverlayRef.current || !titleRef.current) return;

    // --- REMOVED ---
    // The line that was causing the issue:
    // const split = new SplitType(titleRef.current, { types: "chars" });

    const tl = gsap.timeline();

    // Opening animation for overlays (this part is perfect and remains unchanged)
    tl.to(leftOverlayRef.current, {
      xPercent: -100,
      duration: 1.2,
      ease: "power2.out",
    }).to(
      rightOverlayRef.current,
      {
        xPercent: 100,
        duration: 1.2,
        ease: "power2.out",
      },
      "<"
    );

    // --- MODIFIED TITLE ANIMATION ---
    // Instead of animating individual characters (split.chars),
    // we now animate the entire title element (titleRef.current) as one block.
    tl.from(titleRef.current, {
      y: 100,      // The word will slide up
      opacity: 0,  // The word will fade in
      ease: "power3.out",
      duration: 1,
      // "stagger" is removed as we are animating one element, not many.
    });

    // Parallax title movement (this was already correct and remains unchanged)
    // gsap.to(titleRef.current, {
    //   scrollTrigger: {
    //     trigger: heroRef.current,
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    //   y: -200,
    // });

    // It's good practice to clean up GSAP animations
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full px-6 h-screen overflow-hidden"
    >
      <div className="hero-images-wrapper items-stretch h-[85vh] max-h-[85vh] mb-[40px] overflow-hidden ml-auto relative z-0">
        
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852799ca4df546168824dc1_hero-bg-sky.webp")',
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="absolute inset-0 flex pt-20 justify-center z-10">
          <h1
            ref={titleRef}
            // I recommend removing `tracking-widest` and `uppercase` as they don't apply well to Arabic.
            className="text-white text-[8vw] font-bold mix-blend-difference"
          >
            المساحة
          </h1>
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-20 pointer-events-none"
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68527cef584ba0273dcef6e2_Untitled%20design%20(15).webp")',
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div
          ref={leftOverlayRef}
          className="absolute top-0 left-0 w-1/2 h-full bg-white z-30"
        ></div>
        <div
          ref={rightOverlayRef}
          className="absolute top-0 right-0 w-1/2 h-full bg-white z-30"
        ></div>
      </div>
    </section>
  );
}