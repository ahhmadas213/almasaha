"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"
import { gsap } from "gsap"

export default function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <header ref={headerRef} className="absolute top-0 left-0 w-1/2 right-0 z-50 bg-transparent">
      <div className="mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">المساحة</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-4">
            {/* <Link href="/" className="text-black hover:text-black/60 transition-colors">
              الرئيسية
            </Link> */}
            <Link href="/about" className="text-black hover:text-black/60 transition-colors">
              من نحن
            </Link>
            <Link href="/services" className="text-black hover:text-black/60 transition-colors">
              خدماتنا
            </Link>
            <Link href="/portfolio" className="text-black hover:text-black/60 transition-colors">
              معرض الأعمال
            </Link>
            <Link href="/courses" className="text-black hover:text-black/60 transition-colors">
              الدورات التدريبية
            </Link>
            <Link href="/contact" className="text-black hover:text-black/60 transition-colors">
              تواصل معنا
            </Link>
          </nav>

          {/* Social Icons & Burger Menu */}
          <div className="flex items-center space-x-reverse space-x-4">
             {/* <div className="flex flex-col space-y-2 cursor-pointer">
              <span className="block w-6 h-0.5 bg-orange-500"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div> */}
            {/* Burger Menu */}
            <div className="md:hidden flex flex-col space-y-1 cursor-pointer">
              <span className="block w-6 h-0.5 bg-orange-500"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
