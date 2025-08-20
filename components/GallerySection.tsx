'use client'
import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



function GallerySection() {

  const galleryRef = useRef(null)
  const sectionRef = useRef(null)
  const generateRows = () => {
      const rows = [];
      for (let i = 1; i <= 3; i++) {
          rows.push(
              <div key={i} className="row">
                  <div className="card card-left">
                    <img src={`/images/gallery${2 * i - 1}.jpg`} alt="" />
                  </div>
                  <div className="card card-right">
                    <img src={`/images/gallery${2 * i }.jpg`} alt="" />

                  </div>
                
              </div>
          );
      }

      return rows;
  }

  useGSAP(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
      scrub: 1,
    }

    
    gsap.to(
      galleryRef.current,
      {
        scale: 0.8,
        ease: "none",
        borderRadius: "50px",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "bottom bottom", // starts when bottom hits bottom of viewport
          end: "bottom 50%",      // bottom reaches halfway
          scrub: true,
        },
      }
    );


    const leftXValues = [800, 900, 400];
    const rightXValues = [-800, -900, -400];
    const leftRotateValues = [30, 20, 35];
    const rightRotateValues = [-30, -20, -35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardleft = row.querySelector(".card-left");
      const cardright = row.querySelector(".card-right");

      gsap.to(cardleft, {
        x: leftXValues[index],  
        scrollTrigger: {
          trigger: ".main",
          start: "top 80%",
          end: "150% bottom",
          scrub: true,

          onUpdate: (self) => {
            const progress = self.progress;
            cardleft.style.transform = `translateX(${leftXValues[index] * progress}px) rotate(${leftRotateValues[index] * progress}deg) translateY(${yValues[index] * progress}px)`;
            cardright.style.transform = `translateX(${rightXValues[index] * progress}px) rotate(${rightRotateValues[index] * progress}deg) translateY(${yValues[index] * progress}px)`;
          }
        },
        rotation: leftRotateValues[index],
        y: yValues[index],
      });
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.from(".gallery-title span", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".gallery-title",
      start: "top 80%",
    }
  });

  });
  

  return (
    // <section ref={sectionRef} className="w-full  z-1 bg-white">
      <div ref={galleryRef} className="main h-[150vh] z-1 relative bg-almost_black overflow-hidden w-screen  flex-col flex items-center justify-center">
      <div className="main-content">

        <div className="">
          {/* title */}
          <h1 className="gallery-title text-4xl md:text-6xl font-bold text-white text-center mb-8 leading-snug">
            <span className="block text-primary">رحلة بصرية</span>
            <span className="block">داخل عوالم إبداعنا</span>
          </h1>
        </div>
        <div className="btn">
          <button className="relative py-3 px-5 rounded-full bg-white text-black font-semibold border-2 border-white bg-transparent trnaslate-y-[30px] opacity-0">
            <Link href="/contact">Get in touch</Link>
          </button>
        </div>
      </div> 

      {generateRows()}
      </div>
    // </section>
  )
}
export default GallerySection