"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-gray-800"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059ee44a?auto=format&fit=crop&w=1974&q=80",
    title: "بناء هوية",
    tag: null,
  },
  {
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=2070&q=80",
    title: "تصميم داخلي",
    tag: "04",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613946394539-334421b831f2?auto=format&fit=crop&w=1974&q=80",
    title: "تأثيث",
    tag: "04",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80",
    title: "دورات تدريبية",
    tag: "04",
  },
];

function OurServicesSection() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    gsap.set(itemsRef.current, {
      width: "80px",
      borderRadius: "9999px",
      overflow: "hidden",
    });

    gsap.to(itemsRef.current, {
      width: "100%",
      duration: 1.2,
      ease: "power3.inOut",
      borderRadius: "9999px",
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // when section hits 70% viewport height
        once: true, // run only once
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col w-full min-h-screen bg-almost_black text-white overflow-hidden"
    >
      <div className="relative flex flex-col md:flex-row w-full">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-start p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            خدمات المساحة… لمسات إبداعية تحوّل أفكارك إلى واقع يعكس شخصيتك ويلهم من حولك.
          </h2>
          <a href="#" className="text-gray-400 mt-6 text-lg flex items-center">
            <span className="mr-2 text-xl">•</span> Explore More &rarr;
          </a>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center p-8 md:p-12">
          <div className="w-full max-w-lg h-full space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="bg-white rounded-full p-4 flex items-center justify-between w-full shadow-lg"
                style={{ width: "80px" }}
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden ml-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-black font-semibold text-xl ml-3">
                    {service.title}
                    {service.tag && (
                      <sup className="text-gray-500 font-normal ml-1">
                        {service.tag}
                      </sup>
                    )}
                  </span>
                </div>
                <div className="pr-2">
                  <ArrowDownIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
