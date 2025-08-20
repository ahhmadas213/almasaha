'use client'

import { useState } from 'react';
import Image from "next/image";
import Dialog from '@/components/Dialog'; // Import from .tsx file
import SignupForm from '@/components/SignupForm'; // Import from .tsx file

export default function Courses(): JSX.Element {
  // State to control the dialog's visibility, typed with boolean
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <main>

      <section className="h-screen w-full p-2">
        <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-end justify-start">
          
          <Image 
            alt="3ds Max architectural visualization"
            src={"/images/gallery8.jpg"} 
            fill 
            className="object-cover z-0" 
            priority
          />

          <div 
            className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"
          />

          <div className="relative z-20 p-8 md:p-12 max-w-2xl text-white" dir="rtl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              أتقن التصميم الداخلي ثلاثي الأبعاد مع دورة 3ds Max الاحترافية
            </h1>
            <p className="text-lg md:text-xl mb-6">
              انطلق في رحلة من الفكرة إلى الواقع. تعلم النمذجة، الإكساء، والإخراج السينمائي لإنشاء مشاريع معمارية ومنتجات مذهلة.
            </p>
            <button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
            >
              سجل الآن
            </button>
          </div>
          
        </div>
      </section>
      
      <Dialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        title="طلب الانضمام للدورة"
      >
        <SignupForm />
      </Dialog>
          </main>
  );
}