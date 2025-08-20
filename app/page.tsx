import Header from "@/components/Header"
// import HeroSection from "@/components/HeroSection"
import FeaturedProjects from "@/components/FeaturedProjects"
import ContactCTA from "@/components/ContactCTA"
import Hero from "@/components/Hero"
import TitleSection from "@/components/TitleSection"
import GallerySection from "@/components/GallerySection"
import AboutSection from "@/components/AboutSection"
import OurServicesSection from "@/components/OurServicesSection"
import MainHeader from "@/components/MainHeader"


export default function Home() {
  return (
    <main className="overflow-hidden h-fit py-20 md:py-0">
      <MainHeader/>
      <Hero/>
    
      <TitleSection />
      <GallerySection/>
      <AboutSection/>
      <OurServicesSection/>

      <FeaturedProjects />    
      
    </main>
  )
}
