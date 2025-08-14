"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

type ParalaxImageProps = {
  src: string;
  alt?: string;
};

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export const ParalaxImage = ({ src, alt }: ParalaxImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const bounds = useRef<{ top: number; bottom: number } | null>(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const animate = () => {
      currentTranslateY.current = lerp(
        currentTranslateY.current,
        targetTranslateY.current,
        0.1
      );

      if (
        imageRef.current &&
        Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.1
      ) {
        imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Lenis scroll handler
  useLenis(({ scroll }) => {
    if (!bounds.current) return;
    const relativeScroll = scroll - bounds.current.top;
    targetTranslateY.current = relativeScroll * 0.2;
  });

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
        display: "block",
        width: "100%",
        height: "auto",
      }}
    />
  );
};
