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
    title: "Modern Hospitality with a Sea View",
    description: "A calm, contemporary suite inspired by the colors of sand and sea. Natural materials and soft details create a relaxing atmosphere with a layout that offers comfort and privacy.",
    imageUrl: "/images/proj1.webp",
    category: "Hospitality" // Changed to English for consistency
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
    category: "سكني" // Category updated to match the description
  },
  {
    id: 4,
    title: "متجر أزياء عصري",
    description: "في قلب السيتي ووك، صممنا متجرًا لعلامة تجارية سعودية. يجمع التصميم بين البساطة والعصرية، حيث تعبر كل زاوية عن شخصية البراند بقوة.",
    imageUrl: "/images/proj4.webp",
    category: "تجاري" // Category updated to match the description
  },
];


const categories = [
  { id: "all", name: "جميع المشاريع" },
  { id: "سكني", name: "سكني" },
  { id: "تجاري", name: "تجاري" },
  { id: "ضيافة", name: "ضيافة" }
];


type ProjectFeaturedCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
};

function ProjectFeaturedCard({ title, description, imageUrl, index }: ProjectFeaturedCardProps) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

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
          ref={imageRef}
          className="object-cover scale-[1.4]"
          fill
          alt={title} // Use the title for a more descriptive alt text
          src={imageUrl}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>  

      {/* --- MODIFIED TEXT CONTAINER --- */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-right">
        {/* Title remains visible */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
          {title}
        </h3>
        {/* Description is now hidden by default and appears on hover */}
        <p className="text-white/90 text-sm leading-relaxed drop-shadow-md transition-all duration-300 ease-in-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProjectSection() {


  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);




  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  useGSAP(() => {
    const h1 = sectionRef.current?.querySelector("h1");
    if (h1) {
      gsap.from(h1, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }

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