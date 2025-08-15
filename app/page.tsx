import Header from "@/components/Header"
// import HeroSection from "@/components/HeroSection"
import FeaturedProjects from "@/components/FeaturedProjects"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import TitleSection from "@/components/TitleSection"
import GallerySection from "@/components/GallerySection"
import AboutSection from "@/components/AboutSection"
import OurServicesSection from "@/components/OurServicesSection"
import ShrinkOnScroll from "@/components/ShrinkOnScroll"
// import HeroSection from "@/components/AnimatedHeroSection"

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Header /> */}
      <Hero/>
      {/* <AnimatedHeroSection/> */}
      {/* <HeroSection /> */}
      
    
      <TitleSection />
      <GallerySection/>
      <AboutSection/>
      <OurServicesSection/>

      <FeaturedProjects />
      {/* <ShrinkOnScroll/> */}
    
      
      {/* <section className="bg-white text-white py-16 h-screen w-full">

      </section> */}
        {/* 
      <FeaturedProjects />
      <ContactCTA />
      <Footer /> */}
    </main>
  )
}
