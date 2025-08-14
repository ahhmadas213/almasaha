'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

// Register all necessary GSAP plugins
gsap.registerPlugin(CustomEase, Flip, SplitText);


function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const mainImageRef = useRef(null)
  const smallImagesRef = useRef([]) 
  const topTextRef = useRef(null);
  const glassCardRef = useRef(null);


  useGSAP(() => {
    const splits = [];

    try {
      splits.push(new SplitText(titleRef.current, { type: "words" }));
      splits.push(new SplitText(subtitleRef.current, { type: "words" }));
      splits.push(new SplitText(descriptionRef.current, { type: "words" }));
    } catch (error) {
      console.error("Error creating SplitText:", error);
      return; 
    }
    
    splits.forEach(split => {
      if(split.words) {
        gsap.set(split.words, { 
          opacity: 0, 
          y: 20, 
          scale: 0.2,
          rotationX: 45
        });
      }
    });

    gsap.set(buttonsRef.current, { y: 50, opacity: 0 });
    gsap.set(smallImagesRef.current, { y: 100, opacity: 0, scale: 0.9 });
    gsap.set(topTextRef.current, { opacity: 0, y: -20 });
    gsap.set(glassCardRef.current, { opacity: 0, y: 20 });
    
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(mainImageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut"
    })
    .to(topTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1")
    .to(glassCardRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "<0.2")
    .to(splits.flatMap(s => s.words), { 
        y: 0,
        opacity: 1,
        scale: 1, 
        rotationX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1, 
    }, 0.2)
    .to(buttonsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power3.out" 
    }, "-=0.6")
    .to(smallImagesRef.current, { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      duration: 1, 
      stagger: 0.15, 
      ease: "power3.out" 
    }, "-=0.8")

    return () => {
      splits.forEach(split => split.revert());
    };

  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef}
    
      className="relative flex flex-col md:flex-row w-full min-h-screen md:h-screen p-4 bg-white overflow-hidden"
    >
      {/* --- Left Column (Text Content) --- */}
      <div className="w-full md:w-1/2 flex relative flex-col justify-center items-center p-8 md:p-6 z-10 order-2 md:order-1">
        {/* CHANGE 2: Set text alignment to `text-center` for ALL screen sizes. */}
        <div className="space-y-6 md:space-y-8 text-center">
          <div className="space-y-2 md:space-y-4">
            <h1 
              ref={titleRef}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-none tracking-tight"
              style={{ perspective: '800px' }} 
            >
              المساحة
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg !leading-normal md:text-2xl lg:text-3xl font-thin text-black tracking-tight"
              style={{ perspective: '800px' }}
            >
              كيف ممكن فكرة بسيطة تغير احساس المكان بالكامل؟
            </p>
          </div>

          <p 
            ref={descriptionRef}
            // CHANGE 3: `max-w-md` and `mx-auto` ensure the paragraph is centered and has a readable width.
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto"
            style={{ perspective: '800px' }}
          >
            العقل يخلق الجمال، القلب يخلق البيت، البيت الحلو البيت
          </p>
        </div>
        
        <div 
            ref={buttonsRef} 
            // CHANGE 4: `justify-center` ensures the button is centered on all screen sizes.
            className="flex md:absolute right-0 bottom-0 flex-col sm:flex-row gap-4 justify-center mt-8"
        >
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:border-gray-400 transition-colors duration-300 flex items-center justify-center gap-2 group">
              اعرف المزيد
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
        </div>
      </div>

      {/* --- Right Column (Image and Overlays) --- */}
      {/* CHANGE 5: `min-h-[50vh]` gives the image a substantial height on mobile.
          `md:h-full` now works correctly because the parent <section> has `md:h-screen`. */}
      <div 
        className="relative w-full md:w-1/2 min-h-[50vh] overflow-hidden md:h-full p-4 order-1 md:order-2"
      >
        <Image
          ref={mainImageRef}
          className='object-cover scale-125 opacity-0 rounded-2xl'
          fill
          alt='hero section image'
          src={"/images/hero-section-1.jpg"}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div 
          className="absolute flex w-full items-center top-6 right-0 z-10 px-4 justify-between text-white font-semibold text-lg"
        >
          <p ref={topTextRef}>
            مشروع تصميم داخلي
          </p>

          <p>
            وكالة المساحة للتصميم الداخلي
          </p>
        </div>

        <div 
          ref={glassCardRef}
          className="absolute bottom-6 left-4 right-4 md:left-auto md:w-auto md:right-8 z-10 p-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md"
        >
          <h4 className="text-white font-bold text-lg">فيلا حديثة</h4>
          <p className="text-white/80 text-sm mt-1">
            تم التنفيذ في الرياض، المملكة العربية السعودية
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;