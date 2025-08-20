"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// GSAP and React Icons
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTiktok } from "react-icons/fa";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);
  const mapSectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    const h1 = heroRef.current?.querySelector("h1");
    if (h1) {
      gsap.from(h1, { opacity: 0, y: 50, duration: 1, ease: "power3.out", delay: 0.2 });
    }
    const p = heroRef.current?.querySelector("p");
    if (p) {
      gsap.from(p, { opacity: 0, y: 40, duration: 1, ease: "power3.out", delay: 0.4 });
    }
    const bgImage = heroRef.current?.querySelector(".bg-image");
    if (bgImage) {
      gsap.to(bgImage, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true }
      });
    }

    // Form & Details Section Animation
    const tl = gsap.timeline({ scrollTrigger: { trigger: formSectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
    tl.from(detailsRef.current, { opacity: 0, x: 50, duration: 0.8, ease: "power3.out" })
      .from(formRef.current, { opacity: 0, x: -50, duration: 0.8, ease: "power3.out" }, "-=0.5");

    // Map Animation
    gsap.from(mapSectionRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: mapSectionRef.current, start: "top 85%", toggleActions: "play none none reverse" }
    });
  }, []);

  const inputStyles = "bg-white/5 border border-primary/20 rounded-full px-6 py-3 h-14 text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-colors duration-300";
  
  // --- Style for the select items to override default hover color ---
  const selectItemStyles = "rounded-xl text-white focus:bg-black/50 focus:text-white cursor-pointer";

  return (
    <main className="bg-almost_black text-white" dir="rtl">
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery6.jpg"
            alt="Contact Almasaha Interior Design"
            fill
            className="object-cover bg-image"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">تواصل معنا</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            نحن هنا لتحويل أفكارك إلى حقيقة. سواء كان لديك سؤال أو مشروع، فريقنا جاهز لمساعدتك.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM & DETAILS SECTION ===== */}
      <section ref={formSectionRef} className="py-20 md:py-28 bg-almost_black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* --- Contact Details Panel --- */}
            <div ref={detailsRef} className="lg:col-span-1 space-y-8 bg-primary/10 border border-primary/20 rounded-2xl p-8 h-fit">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">معلومات الاتصال</h3>
                <div className="space-y-5">
                  <a href="tel:+966123456789" className="flex items-center gap-4 text-lg text-white/80 hover:text-primary transition-colors">
                    <FaPhone className="text-primary" size={20} />
                    <span>+966 12 345 6789</span>
                  </a>
                  <a href="mailto:info@almasaha.com" className="flex items-center gap-4 text-lg text-white/80 hover:text-primary transition-colors">
                    <FaEnvelope className="text-primary" size={20} />
                    <span>info@almasaha.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-lg text-white/80">
                    <FaMapMarkerAlt className="text-primary" size={20} />
                    <span>جدة، المملكة العربية السعودية</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 pt-4 border-t border-primary/20 text-white">تابعنا</h3>
                <div className="flex items-center gap-4">
                  <Link href="#" className="p-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-primary/30 transition-all"><FaInstagram size={24} /></Link>
                  <Link href="#" className="p-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-primary/30 transition-all"><FaTiktok size={24} /></Link>
                </div>
              </div>
            </div>

            {/* --- Contact Form Panel --- */}
            <div ref={formRef} className="lg:col-span-2 bg-white/5 border border-primary/20 text-almost_black p-8 md:p-12 rounded-2xl shadow-2xl shadow-primary/10">
              <h2 className="text-3xl font-bold mb-2 text-white">أرسل لنا رسالة</h2>
              <p className="text-white/70 mb-8">
                املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.
              </p>
              <form className="space-y-6">
                <Input type="text" placeholder="الاسم الكامل *" required className={inputStyles} />
                <Input type="email" placeholder="البريد الإلكتروني *" required className={inputStyles} />
                <Input type="tel" placeholder="رقم الهاتف" className={inputStyles} />
                {/* === MODIFIED SELECT COMPONENT === */}
                <Select>
                  <SelectTrigger className={`${inputStyles} text-left`}>
                    <SelectValue placeholder="اختر الخدمة المطلوبة" />
                  </SelectTrigger>
                  <SelectContent className="bg-almost_black border border-primary/20 text-white rounded-2xl">
                    <SelectItem className={selectItemStyles} value="interior-design">تصميم داخلي</SelectItem>
                    <SelectItem className={selectItemStyles} value="courses">كورسات</SelectItem>
                    <SelectItem className={selectItemStyles} value="furniture">تأثيث</SelectItem>
                    <SelectItem className={selectItemStyles} value="consultation">استشارة</SelectItem>
                  </SelectContent>
                </Select>
                {/* ================================= */}
                <Textarea 
                  placeholder="رسالتك *" 
                  rows={5} 
                  required 
                  className="bg-white/5 border border-primary/20 rounded-3xl px-6 py-4 text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-colors duration-300 min-h-[150px]"
                />
                <Button type="submit" size="lg" className="w-full bg-primary text-almost_black hover:bg-primary/90 font-bold text-lg py-7 rounded-full transition-transform hover:scale-[1.02]">
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section ref={mapSectionRef} className="pb-20">
         <div className="container mx-auto px-4">
             <div className="h-80 md:h-[500px] rounded-2xl overflow-hidden border-4 border-primary/30">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d237344.3286793403!2d39.00149094179687!3d21.505368900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e03%3A0x23554d9596941432!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1676405334849!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
             </div>
         </div>
      </section>
    </main>
  );
};

export default ContactPage;