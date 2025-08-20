"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Header from "@/components/Header";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Modern Hospitality with a Sea View",
    description: "A calm, contemporary suite inspired by the colors of sand and sea. Natural materials and soft details create a relaxing atmosphere with a layout that offers comfort and privacy.",
    imageUrl: "/images/proj1.webp",
    category: "Hospitality"
  },
  {
    id: 2,
    title: "تصميم مختلف، ملفت، ويترك بصمة",
    description: "صممنا مجمعًا تجاريًا بهوية عصرية تلفت الأنظار، حيث كل زاوية، من الواجهة إلى التفاصيل الداخلية، مصممة لتكون مميزة وتضيف تجربة فريدة للزوار.",
    imageUrl: "/images/proj2.webp",
    category: "تجاري"
  },
  {
    id: 3,
    title: "مساحة عصرية بلمسة دافئة",
    description: "صممنا مساحة في الرياض تعكس بساطة الطراز الحديث ودفء التفاصيل، مع دمج المعيشة والطعام بألوان هادئة ولمسات من الخشب لتعزيز الشعور بالراحة والفخامة.",
    imageUrl: "/images/proj3.webp",
    category: "سكني"
  },
  {
    id: 4,
    title: "متجر أزياء عصري",
    description: "في قلب السيتي ووك، صممنا متجرًا لعلامة تجارية سعودية. يجمع التصميم بين البساطة والعصرية، حيث تعبر كل زاوية عن شخصية البراند بقوة.",
    imageUrl: "/images/proj4.webp",
    category: "تجاري"
  },
  {
    id: 5,
    title: "فيلا سكنية فاخرة",
    description: "تصميم داخلي لفيلا سكنية يجمع بين الفخامة والدفء، مع استخدام مواد طبيعية وتفاصيل دقيقة لخلق مساحة معيشة استثنائية.",
    imageUrl: "/images/gallery1.jpg",
    category: "سكني"
  },
  {
    id: 6,
    title: "مكتب شركة حديث",
    description: "تصميم مكتب شركة يعكس هوية العلامة التجارية ويوفر بيئة عمل ملهمة ومريحة للموظفين.",
    imageUrl: "/images/gallery2.jpg",
    category: "تجاري"
  },
  {
    id: 7,
    title: "جناح فندقي أنيق",
    description: "تصميم جناح فندقي يجمع بين الراحة والفخامة، مع إطلالات خلابة وتفاصيل مدروسة لتجربة إقامة لا تُنسى.",
    imageUrl: "/images/gallery3.jpg",
    category: "Hospitality"
  },
  {
    id: 8,
    title: "مقهى عصري",
    description: "تصميم مقهى يجمع بين الطابع الصناعي والدفء، مع استخدام الإضاءة الطبيعية والنباتات لخلق أجواء مريحة وجذابة.",
    imageUrl: "/images/gallery4.jpg",
    category: "تجاري"
  },
];

const categories = [
  { id: "all", name: "جميع المشاريع" },
  { id: "سكني", name: "سكني" },
  { id: "تجاري", name: "تجاري" },
  { id: "Hospitality", name: "ضيافة" }
];

type ProjectFeaturedCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

function ProjectFeaturedCard({ title, description, imageUrl }: ProjectFeaturedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      y: "40%",
      ease: "none",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl shadow-xl overflow-hidden h-96 lg:h-[85vh] group cursor-pointer hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image
          ref={imageRef as React.RefObject<HTMLImageElement>}
          className="object-cover scale-[1.4]"
          fill
          alt={title}
          src={imageUrl}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>  
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-right">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
          {title}
        </h3>
        <p className="text-white/90 text-sm leading-relaxed drop-shadow-md transition-all duration-300 ease-in-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40">
          {description}
        </p>
      </div>
    </div>
  );
}

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  useGSAP(() => {
    if (sectionRef.current) {
      const h1 = sectionRef.current.querySelector("h1");
      if (h1) {
        gsap.from(h1, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }
  }, { scope: sectionRef });

  return (
    <>
      <Header />
      <main
        ref={sectionRef}
        className="min-h-screen mt-10 bg-white flex px-4 md:px-6 py-12 flex-col justify-start text-white mx-auto"
        dir="rtl"
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-12 gap-8 md:gap-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-almost_black font-bold text-center md:text-right">
            معرض اعمالنا
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-2 bg-almost_black backdrop-blur-sm rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeFilter === category.id
                      ? "bg-primary text-almost_black shadow-lg transform scale-105"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectFeaturedCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default PortfolioPage;
