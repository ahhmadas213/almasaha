"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// This type definition is good practice when using TypeScript
type HTMLDivElementRef = React.RefObject<HTMLDivElement>;


gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "فيلا عصرية بالرياض",
    description: "تصميم داخلي راقي يجمع بين الأصالة والحداثة مع استخدام الألوان الدافئة والمواد الطبيعية",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "سكني"
  },
  {
    id: 2,
    title: "مكتب إداري فاخر",
    description: "مساحة عمل عصرية تعكس الهوية المؤسسية مع توفير بيئة مريحة ومحفزة للإبداع",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "تجاري"
  },
  {
    id: 3,
    title: "مطعم تراثي معاصر",
    description: "تصميم يحتفي بالتراث العربي الأصيل مع لمسة عصرية تخلق تجربة طعام لا تُنسى",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "ضيافة"
  },
    {
    id: 4,
    title: "شقة عائلية دافئة",
    description: "مساحة عائلية مريحة تتميز بالألوان الهادئة والإضاءة الطبيعية مع مساحات تخزين ذكية",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "سكني"
  },
  {
    id: 5,
    title: "صالة عرض فنية",
    description: "مساحة عرض فنية تبرز الأعمال الفنية مع إضاءة مدروسة وتصميم يركز على التفاصيل",
    imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "تجاري"
  },
  {
    id: 6,
    title: "فندق بوتيكي راقي",
    description: "تصميم فندقي يجمع بين الفخامة والراحة مع عناصر تراثية معاصرة",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "ضيافة"
  }
];

const categories = [
  { id: "all", name: "جميع المشاريع" },
  { id: "سكني", name: "سكني" },
  { id: "تجاري", name: "تجاري" },
  { id: "ضيافة", name: "ضيافة" }
];

function ProjectFeaturedCard({ title, description, imageUrl, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // gsap.set(cardRef.current, { scale: 0.9, opacity: 0.5 });
    // gsap.to(cardRef.current, {
    //   scale: 1,
    //   opacity: 1,
    //   duration: 0.8,
    //   delay: index * 0.1,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: cardRef.current,
    //     start: "top 80%",
    //     toggleActions: "play none none reverse"
    //   }
    // });

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
      // CHANGE 1: Card height is now responsive.
      // `h-96` (a fixed height) for mobile screens.
      // `lg:h-[85vh]` restores the large height for large screens only.
      className="relative rounded-2xl shadow-xl overflow-hidden h-96 lg:h-[85vh] group cursor-pointer hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            ref={imageRef}
            className="object-cover scale-[1.4]"
            fill
            alt="hero section image"
            src={imageUrl}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>  

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 text-right drop-shadow-lg">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed text-right line-clamp-2 drop-shadow-md">{description}</p>
      </div>
    </div>
  );
}

function ProjectSection() {


  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);




  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  useGSAP(() => {
     gsap.from(sectionRef.current?.querySelector("h1"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.fromTo(
      sectionRef.current,
      { maxWidth: "100%", margin: "0 auto", borderRadius: "0px" },
      {
        maxWidth: "95%",
        borderRadius: "30px",
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
   <section
      ref={sectionRef}
      // CHANGE 2: Adjusted padding for better spacing on mobile vs desktop.
      className="min-h-screen bg-almost_black flex px-4 md:px-6 py-12 flex-col justify-start text-white mx-auto"
    >
      
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-12 gap-8 md:gap-0">
        {/* CHANGE 4: Title font size is now responsive. */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-right">مشاريع نفخر بها</h1>
        
        {/* CHANGE 5: Filter buttons now wrap and are centered on mobile. */}
        <div className="flex flex-wrap justify-center items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              // CHANGE 6: Padding inside buttons is slightly reduced on mobile.
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

      <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectFeaturedCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;