'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ScrollingStrip() {
  const stripRef = useRef(null);

  // Arabic phrases for the strip
  const phrases = [
    'إلهام بلا حدود',
    'أفكار تتحول لواقع',
    'لمسات إبداعية',
    'تصاميم مبهرة',
    'تفاصيل تذهل العيون',
    'حلول مبتكرة',
  ];

  useGSAP(() => {
    const strip = stripRef.current;
    const items = strip.querySelectorAll('.strip-item');

    // Duplicate items for seamless infinite scroll
    const totalItems = items.length;
    for (let i = 0; i < totalItems; i++) {
      const clone = items[i].cloneNode(true);
      strip.appendChild(clone);
    }

    const width = strip.scrollWidth / 2; // original items width

    // GSAP horizontal infinite scroll
    gsap.to(strip, {
      x: -width,
      ease: 'linear',
      duration: 30, // adjust speed
      repeat: -1,
    });
  }, []);

  return (
    <div className='overflow-hidden relative w-full bg-almost_black py-8'>
      <div
        ref={stripRef}
        className='flex gap-8 whitespace-nowrap'
      >
        {phrases.map((text, index) => (
          <div
            key={index}
            className='strip-item bg-white/40 rounded-full p-4 flex items-center justify-center shadow-lg flex-shrink-0'
            style={{ minWidth: '250px' }}
          >
            <p className='text-3xl text-white'>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
