import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutSection() {
  return (
    <section 
      className="relative flex flex-col md:flex-row-reverse w-full min-h-screen md:h-screen p-4 bg-white overflow-hidden"
    >
      {/* الصورة */}
      <div 
        className="relative z-10 w-full md:w-1/2 min-h-[50vh] overflow-hidden md:h-full p-4 order-1 md:order-2 rounded-2xl"
      >
        <Image
          className='object-cover rounded-2xl'
          fill
          alt='hero section image'
          src={"/images/gallery4.jpg"}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

             <div 
          className="absolute flex w-full items-center top-6 right-0 z-10 px-4 justify-between text-white font-semibold text-lg"
        >
          <Link href="/contact" className="px-4 py-2 flex items-center justify-between gap-4 text-almost_black  bg-white/60 backdrop-blur-sm rounded-full"> 
            <p>
            تواصل معنا
            </p>
            <div className='h-8 w-8 bg-white rounded-full flex items-center justify-center '>
              <Phone />
            </div>
          </Link>
        </div>
      </div>

      {/* النص */}
      <div className="w-full md:w-1/2 flex relative flex-col justify-center items-center md:items-start p-8 md:p-12 z-10 order-2 md:order-1">
        <div className="space-y-6 md:space-y-8 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            من نحن
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            في <span className="font-semibold text-almost_black/50">المساحة للتصميم الداخلي</span>،
            نؤمن أن لكل مساحة قصة، ونهدف إلى تحويلها إلى بيئة نابضة بالجمال
            والوظيفية. بخبرة فريقنا وإبداعنا، نقدم حلولاً تصميمية متكاملة 
            تجمع بين الأناقة والراحة.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-almost_black/50 font-bold">•</span>
              بناء هوية بصرية قوية.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-almost_black/50 font-bold">•</span>
              تصميم داخلي متكامل للمساحات.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-almost_black/50 font-bold">•</span>
              اختيار أثاث مخصص وعالي الجودة.
            </li>
          </ul>

          <button className="px-6 py-3 bg-[#C98EC6] text-white rounded-full hover:bg-[#b977b1] transition-colors">
            تعرف علينا أكثر
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
