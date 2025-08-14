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
  const contentRef = useRef(null);

  useGSAP(() => {
    // Main clipping animation
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.set(backgroundRef.current, {clipPath: "round 30px"});

    // Color change animation — from grey to dark as center approaches top
    gsap.to(
      sectionRef.current,
      {
        backgroundColor: "#2D2D2D",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // when section center hits bottom
          end: "center top",      // fully colored when center hits top
          scrub: 1,
        },
      }
    );

    // Clip-path entrance with rounded corners
    mainTl.fromTo(
      clipContainerRef.current,
      // We add "round 30px" to curve the corners
      { clipPath: "inset(55% 55% 55% 55% round 30px)" },
      { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out", duration: 0.5 }
    );

    // Clip-path exit with rounded corners
    mainTl.to(
      clipContainerRef.current,
      // We add "round 30px" to the exit animation as well
      { clipPath: "inset(10% 5% 10% 5% round 30px)", ease: "power1.out", duration: 0.5 },
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen relative overflow-hidden">
      {/* Clip-path container */}
      <div ref={clipContainerRef} className="absolute inset-0 w-full h-full">
        <div
          ref={backgroundRef}
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852799ca4df546168824dc1_hero-bg-sky.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            // This border-radius is now complemented by the clip-path rounding
            borderRadius: "30px",
          }}
          className="w-full h-full"
        ></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative w-full h-full flex items-center justify-center text-white"
      >
        <div className="text-center">
          <h2 className="text-6xl font-bold">Our Services</h2>
          <p className="mt-4 max-w-2xl text-2xl">
            This content animates as the section scrolls.
          </p>
        </div>
      </div>
    </section>
  );
}