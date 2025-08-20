'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
// No need for all the plugins if they are not used, but keeping them as they were in your code
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';
import type { SplitText as SplitTextType } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { FaTiktok, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

gsap.registerPlugin(CustomEase, Flip, SplitText, ScrollTrigger);

// --- Data for the small images to avoid repetition ---
const smallImageData = [
  { src: "/images/gallery5.jpg", className: "bottom-20 left-12 w-32 h-32" },
  { src: "/images/gallery6.jpg", className: "top-1/2 right-10 w-32 h-32" },
  { src: "/images/gallery7.jpg", className: "bottom-12 right-20 w-32 h-32" },
];


function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  const mainImageRef = useRef(null)
  const smallImagesRef = useRef<HTMLImageElement[]>([]);
  const topTextRef = useRef(null);
  const socialIconsRef = useRef(null);
  
  // Clear the ref array on each render to avoid stale elements
  smallImagesRef.current = [];

  const addToSmallImages = (el: HTMLImageElement | null) => {
    if (el && !smallImagesRef.current.includes(el)) {
      smallImagesRef.current.push(el);
    }
  };

  useGSAP(() => {
    const splits: SplitTextType[] = [];
    try {
      if (titleRef.current) splits.push(new SplitText(titleRef.current, { type: "words" as const }));
      if (subtitleRef.current) splits.push(new SplitText(subtitleRef.current, { type: "words" as const }));
    } catch (error) {
      console.error("Error creating SplitText:", error);
      return; 
    }
    
    splits.forEach(split => {
      if(split.words) {
        gsap.set(split.words, { opacity: 0, y: 20, scale: 0.2, rotationX: 45 });
      }
    });

    gsap.set(buttonsRef.current, { y: 50, opacity: 0 });
    gsap.set(smallImagesRef.current, { y: 30, opacity: 0, scale: 0.9 });
    gsap.set(topTextRef.current, { opacity: 0, y: -20 });
    gsap.set(socialIconsRef.current, { opacity: 0, y: 20 });
    
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(mainImageRef.current, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.inOut" })
      .to(topTextRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1")
      .to(splits.flatMap(s => s.words || []), { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, 0.2)
      .to(buttonsRef.current, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
      .to(smallImagesRef.current, { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.8")
      .to(socialIconsRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=0.8");

    // --- GSAP MatchMedia for Responsive Animations ---
    const mm = gsap.matchMedia();

    // Add animations for desktop screens only
    mm.add("(min-width: 768px)", () => {
      // Find only the floating images for desktop animations
      const floatingImages = smallImagesRef.current.filter((img): img is HTMLImageElement => img && img.classList.contains('floating-image'));

      floatingImages.forEach((img, i) => {
        if (!img) return;
        // Parallax on scroll
        gsap.to(img, {
          yPercent: i % 2 === 0 ? 20 : -20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        // Idle floating loop
        gsap.to(img, {
          y: "+=15",
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });
      // Return a cleanup function
      return () => {
        floatingImages.forEach(img => gsap.killTweensOf(img));
      }
    });

    return () => {
      splits.forEach(split => split.revert());
      mm.revert(); // Cleanup matchMedia
    };

  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef}
      className="relative flex flex-col md:flex-row w-full min-h-screen md:h-screen p-2 sm:p-4 bg-white overflow-hidden"
    >
      {/* --- Right Column (Content) --- */}
      <div className="w-full md:w-1/2 flex relative flex-col justify-center items-center text-center p-4 sm:p-6 z-10 order-2 md:order-1">
        
        {/* --- DESKTOP: Floating Images Container --- */}
        {/* This div is hidden on mobile and becomes the container for the floating images on desktop */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {smallImageData.map((item, i) => (
            <Image
              key={`desktop-${i}`}
              ref={addToSmallImages}
              src={item.src}
              alt={`floating-${i}`}
              width={128} // Giving a more realistic base size
              height={128}
              className={`floating-image absolute object-contain shadow-2xl rounded-3xl overflow-hidden opacity-0 ${item.className}`}
            />
          ))}
        </div>

        <div className="space-y-4 md:space-y-6" dir='rtl'>
          <div className="space-y-2 md:space-y-3">
            {/* Responsive Text Sizes */}
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight"
              style={{ perspective: '800px' }} 
            >
              المساحة
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-thin text-black tracking-tight !leading-normal"
              style={{ perspective: '800px' }}
            >
              معاً لنضيء مساحتك
            </p>
          </div>
        </div>

        {/* --- MOBILE: Static Image Grid --- */}
        {/* This grid is visible only on mobile and is hidden on desktop */}
        <div className="w-full max-w-sm mt-8 grid  grid-cols-3 gap-3 md:hidden">
          {smallImageData.map((item, i) => (
            <div key={`mobile-${i}`} className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                ref={addToSmallImages}
                src={item.src}
                alt={`grid-image-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 30vw, 0vw"
              />
            </div>
          ))}
        </div>
        
        <div 
            ref={buttonsRef} 
            className="flex w-full justify-center md:w-auto md:absolute md:right-0 md:bottom-0 flex-col sm:flex-row gap-4 mt-8"
        >
            <button className="bg-almost_black text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
              اعرف المزيد
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l-4-4m4 4H3" />
              </svg>
            </button>
        </div>
      </div>

      {/* --- Left Column (Main Image) --- */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-full overflow-hidden order-1 md:order-2 rounded-2xl">
        <Image
          ref={mainImageRef}
          className='object-cover scale-125 opacity-0'
          fill
          alt='hero section image'
          src={"/images/gallery2.jpg"}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div 
          ref={topTextRef}
          className="absolute flex w-full items-center top-6 right-0 z-10 px-4"
        >
          {/* Responsive Text */}
          <p className='text-almost_black font-bold text-base md:text-lg'>وكالة المساحة للتصميم الداخلي</p>
        </div>
        
        <div
          ref={socialIconsRef}
          className="absolute bottom-6 left-6 z-10 flex flex-col gap-3"
        >
            <a href="https://www.tiktok.com/@almasaha_sa?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
              <FaTiktok size={20} />
            </a>
            <a href="https://www.instagram.com/almasaha_sa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black  border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black  border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
              <FaSnapchatGhost size={20} />
            </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;