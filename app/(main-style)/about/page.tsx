"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star, Users, Goal, Handshake } from "lucide-react";

const AboutPage = () => {
  return (
    <>
    <main className="bg-white text-almost_black" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery8.jpg"
            alt="Almasaha Interior Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            من نحن
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            في المساحة، نحوّل رؤيتك إلى حقيقة ملموسة بتصاميم تجمع بين
            الإبداع، الدقة، والأصالة.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-almost_black">
                قصتنا: شغف بالتصميم، والتزام بالتميز
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                في{" "}
                <span className="font-semibold text-almost_black/80 bg-primary rounded-full px-2 py-1">
                  المساحة للتصميم الداخلي
                </span>
                ، نؤمن أن لكل مساحة قصة فريدة تنتظر أن تُروى. بدأت رحلتنا
                بشغف لتحويل الفضاءات العادية إلى بيئات استثنائية تعكس شخصية
                أصحابها وتلبي تطلعاتهم. فريقنا مكون من نخبة من المصممين
                والمهندسين المبدعين الذين يجمعهم حب التفاصيل والسعي نحو الكمال.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                نحن لا نصمم فقط، بل نبني علاقات متينة مع عملائنا، نستمع
                لأحلامهم، ونعمل معهم خطوة بخطوة لتحويلها إلى واقع يعيشونه كل
                يوم.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/gallery2.jpg"
                alt="فريق المساحة للتصميم الداخلي"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-almost_black text-white">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl md:text-4xl font-bold">
            هل أنت مستعد لبدء مشروعك؟
          </h2>
          <p className="mt-4 text-lg text-gray-300  ">
            دعنا نساعدك في تحويل مساحتك إلى تحفة فنية. تواصل معنا اليوم
            للحصول على استشارة مجانية.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-almost_black rounded-full hover:bg-primary/90 transition-colors font-bold text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                تواصل معنا الآن
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default AboutPage;