'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';

import styles from '../styles/HeroSection.module.css';

gsap.registerPlugin(CustomEase, Flip);

export default function AnimatedHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      CustomEase.create("hop", "M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1");
      CustomEase.create("hop2", "M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1");

      const mainTl = gsap.timeline();
      const revealerTl = gsap.timeline();
      const scaleTl = gsap.timeline();

      // --- INITIAL STATES ---
      // FIX: Removed the gsap.set for text, as CSS now handles the initial hidden state.
      gsap.set(`.${styles.img}`, { scale: 1.2, opacity: 0 });
      gsap.set(`.${styles.img}:first-child`, { opacity: 1 });
      gsap.set(`.${styles.revealers}`, { opacity: 1 });
      gsap.set(`.${styles.coverImg}`, { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });

      // Revealer animation
      revealerTl.to(`.${styles.revealer}.r1`, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "hop",
      }).to(`.${styles.revealer}.r2`, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "hop",
      }, "<");

      // Image scale & fade animation
      scaleTl.to(`.${styles.img}`, {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
        stagger: 0.15,
      });

      // --- MAIN TIMELINE SEQUENCE ---
      mainTl.add(revealerTl)
        .add(scaleTl, "-=1.25")
        .add(() => {
          // This part runs after the scale animation is complete.
          const nonMainImages = containerRef.current?.querySelectorAll(`.${styles.img}:not(.${styles.main})`);
          nonMainImages?.forEach((img) => img.remove());

          const imagesContainer = containerRef.current?.querySelector(`.${styles.images}`);
          const state = Flip.getState(gsap.utils.toArray(`.${styles.main}`));

          imagesContainer?.classList.add(styles.stackedContainer);

          const mainImages = containerRef.current?.querySelectorAll(`.${styles.main}`);
          mainImages?.forEach((img) => img.classList.add(styles.stacked));
          
          gsap.set(`.${styles.img}.${styles.stacked}`, { clearProps: "transform, top, left, width, height" });

          // Start the Flip animation. It has a duration of 1.5s.
          Flip.from(state, {
            duration: 1.5,
            ease: "hop",
            absolute: true,
            stagger: 0.1,
          });
        })
        // FIX: Start the text animation 1 second after the Flip animation begins.
        // This makes it feel like it's happening as a result of the images settling.
        .to(`.${styles.word} h1, .${styles.line} p, .${styles.siteInfo} h2`, {
          yPercent: 0,
          duration: 1.5,
          ease: "hop2",
          stagger: 0.05,
        }, "+=1.0") // Position it 1s after the PREVIOUS step (the Flip animation)
        // Start the cover image animation at the same time as the text animation.
        .to(`.${styles.coverImg}`, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "power3.inOut"
        }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* The JSX remains unchanged */}
      <div className={styles.container} ref={containerRef}>
        <div className={`${styles.revealers}`}>
          <div className={`${styles.revealer} r1`}></div>
          <div className={`${styles.revealer} r2`}></div>
        </div>

        <div className={styles.images}>
          <div className={styles.img}><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&q=80" alt="Modern living room" /></div>
          <div className={styles.img}><img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80" alt="Elegant bedroom" /></div>
          <div className={`${styles.img} ${styles.main}`}><img src="https://images.unsplash.com/photo-1615874694520-474822394e73?w=1200&h=800&fit=crop&q=80" alt="Minimalist kitchen" /></div>
          <div className={`${styles.img} ${styles.main}`}><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&q=80" alt="Contemporary space" /></div>
          <div className={`${styles.img} ${styles.main}`}><img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80" alt="Luxury interior" /></div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.siteLogo}>
            <div className={styles.word}><h1>masaha</h1></div>
            <div className={styles.word}><h1>interior design</h1></div>
          </div>
        </div>

        <div className={styles.coverImg}>
          <img src="https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&h=600&fit=crop&q=80" alt="Showcase" />
        </div>

        <div className={styles.siteInfo}>
          <div className={styles.row}>
            <div className={styles.col}><p>featured works</p></div>
            <div className={styles.col}><h2>masaha is an interior design agency</h2></div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}></div>
            <div className={styles.col}>
              <div className={styles.address}>
                <div className={styles.line}><p>masaha</p></div>
                <div className={styles.line}><p>mecca</p></div>
              </div>
              <div className={styles.socials}>
                <div className={styles.line}><p>find</p></div>
                <div className={styles.line}><p>clear</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}