
"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { description: "نحوّل المساحات إلى قصص تُروى بلغة التصميم." },
  { description: "نمزج بين الأناقة والوظيفية لخلق بيئات ملهمة." },
  { description: "كل تفصيلة تُصمم لتعكس ذوقك الفريد." },
];

function AboutSection() {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {

    gsap.to(
      sectionRef.current, 
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger : {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top+=200 top",
          scrub: true,
        }
      }
    )

    // gsap.fromTo(
    //   sectionRef.current,
    //   { 
    //     scale: 1.1,      // slightly larger
    //     yPercent: 1,   // shifted upward (looks like it's behind the first section)
    //     opacity: 0.5     // optional fade-in
    //   },
    //   {
    //     scale: 1,
    //     yPercent: 0,
    //     opacity: 1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top bottom",   // start when the second section enters from below
    //       end: "top center",     // finish when its top reaches center of viewport
    //       scrub: true
    //     }
    //   }
    // );

    // Parallax for image
    gsap.to(imageRef.current, {
      y: "20%",
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Slide-up animation for all text in the section
    gsap.set(textRefs.current, { opacity: 0, y: 30 });
    gsap.to(textRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        once: true,
      },
    });
  }, []);

  return (
      <main className="h-screen w-full -z-10 overflow-hidden bg-white ">
    <section
      ref={sectionRef}
      className="relative -translate-y-32 scale-125 opacity-50  flex flex-col md:gap-8 md:flex-row-reverse w-full h-full p-4 md:p-8  "
    >
      {/* Image column */}
      <div
        ref={imageContainerRef}
        className="relative z-10 w-full md:w-1/2 min-h-[50vh] overflow-hidden md:h-full p-4 order-1 md:order-2 rounded-2xl"
      >
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image 
            ref={imageRef}
            className="object-cover scale-[1.4]"
            fill
            alt="hero section image"
            src={"/images/gallery4.jpg"}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="absolute flex w-full items-center top-6 right-0 z-10 px-4 justify-between text-white font-semibold text-lg">
          <Link
            href="/contact"
            className="px-4 py-2 flex items-center justify-between gap-4 text-almost_black bg-white/60 backdrop-blur-sm rounded-full"
          >
            <p ref={(el) => { if (el) textRefs.current.push(el); }}>تواصل معنا</p>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <Phone />
            </div>
          </Link>
        </div>
      </div>

      {/* Text column */}
      <div className="w-full md:w-1/2 flex relative flex-col h-full justify-between items-start z-10 order-2 md:order-1">
        <div className="space-y-4 max-w-md">
          <h2
            ref={(el) => { if (el) textRefs.current.push(el); }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            من نحن
          </h2>
          <p
            ref={(el) => { if (el) textRefs.current.push(el); }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            في{" "}
            <span className="font-semibold text-almost_black/70 bg-primary rounded-full px-2">
              المساحة للتصميم الداخلي
            </span>
            ، نؤمن أن لكل مساحة قصة، ونهدف إلى تحويلها إلى بيئة نابضة بالجمال
            والوظيفية. بخبرة فريقنا وإبداعنا، نقدم حلولاً تصميمية متكاملة تجمع
            بين الأناقة والراحة.
          </p>
        </div>

        <div className="w-full max-w-md mt-8 space-y-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { if (el) textRefs.current.push(el); }}
              className="flex items-center gap-6 py-6 border-b  border-gray-300 last:border-b-0"
            >
              <p className="text-2xl md:text-3xl text-gray-600 font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}

export default AboutSection;
