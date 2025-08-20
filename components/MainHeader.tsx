"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import HeaderMenu from "@/components/HeaderMenu"
import Link from "next/link";
gsap.registerPlugin(Flip)

export default function MainHeader() {
  const headerRef = useRef(null)

  useGSAP(() => {



    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  })

  return (
    <header ref={headerRef} className="absolute top-0 left-0 w-full md:w-1/2  right-0 z-50">
      <div className="mx-auto px-6 py-4 ">
        <div className="flex items-center justify-between">

          <HeaderMenu />

            {/* Logo */}
            <div className="flex gap-4 items-center bg-white p-2 rounded-full space-x-2">
              <Link href={"/"}>
              
            <Image
              src="/images/logo.png"
              width={32}
              height={32}
              alt="logo"
              className=" object-contain w-8 h-8"
              />
              </Link>
            </div>


        </div>
      </div>
    </header>
  )
}
