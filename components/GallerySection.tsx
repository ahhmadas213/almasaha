"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { ParalaxImage } from "./ParalaxImage";

function GallerySection() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="hero relative w-[100vw] h-[100vh] overflow-hidden">
        <div className="img">
          <ParalaxImage src="/images/gallery1.jpg" alt="Hero Image" />
        </div>

        <div className="nav flex gap-6 absolute top-8 left-8">
          <p className="text-lg font-semibold text-white hover:text-primary transition">tour</p>
          <p className="text-lg font-semibold text-white hover:text-primary transition">courses</p>
          <p className="text-lg font-semibold text-white hover:text-primary transition">contact</p>
          <p className="text-lg font-semibold text-white hover:text-primary transition">works</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects relative w-[100vw] h-[125vh] flex gap-5 overflow-hidden">
        <div className="img">
          <ParalaxImage src="/images/gallery2.jpg" alt="Project Image" />
        </div>
        <div className="project-brief flex flex-col justify-center items-start px-8 py-6">
          <p className="text-base text-gray-700 leading-relaxed font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ipsa nisi ad perferendis, quidem placeat? Nihil nisi facilis, 
            tempora illum corrupti deleniti sapiente commodi possimus perferendis quia! Doloribus, tenetur.
          </p>
        </div>

        <div className="col porjects-cover">
          <div className="img">
            <ParalaxImage src="/images/gallery3.jpg" alt="Project Cover Image" />
          </div>
        </div>
        <div className="col projects-list flex flex-col gap-8 justify-center">
          <div className="project">
            <h1 className="text-primary text-5xl font-bold leading-[1] mb-2">متحف</h1>
            <p className="text-lg text-gray-600 font-medium">بساطة / اناقة / خيال</p>
          </div>

          <div className="project">
            <h1 className="text-primary text-5xl font-bold leading-[1] mb-2">مكتبة</h1>
            <p className="text-lg text-gray-600 font-medium">بساطة / اناقة / خيال</p>
          </div>

          <div className="project">
            <h1 className="text-primary text-5xl font-bold leading-[1] mb-2">مقهى</h1>
            <p className="text-lg text-gray-600 font-medium">بساطة / اناقة / خيال</p>
          </div>
          <div className="project">
            <h1 className="text-primary text-5xl font-bold leading-[1] mb-2">مكتب</h1>
            <p className="text-lg text-gray-600 font-medium">بساطة / اناقة / خيال</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about relative w-[100vw] h-[100vh] overflow-hidden flex">
        <div className="col intro flex flex-col justify-center items-start px-12 py-8">
          <p className="text-3xl font-bold text-primary mb-4">من نحن</p>
          <p className="text-base text-gray-700 leading-relaxed font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ipsa nisi ad perferendis, quidem placeat? Nihil nisi facilis, 
            tempora illum corrupti deleniti sapiente commodi possimus perferendis quia! Doloribus, tenetur.
          </p>
        </div>

        <div className="col portrait flex items-center justify-center">
          <div className="portrait-container">
            <div className="img">
              <ParalaxImage src="/images/gallery4.jpg" alt="Portrait Image" />
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner relative w-[100vw] h-[100vh] overflow-hidden flex items-center">
        <div className="img">
          <ParalaxImage src="/images/gallery5.jpg" alt="Banner Image" />
        </div>
        <div className="banner-copy absolute left-16 top-1/3 flex flex-col gap-4 bg-white/80 p-8 rounded-lg shadow-lg">
          <p className="text-xl font-semibold text-primary">be the</p>
          <h1 className="text-5xl font-bold text-gray-900">first to know </h1>
          <p className="text-base text-gray-700">want to hear the latest news? Join us now</p>
          <button className="bg-primary text-white px-6 py-2 rounded font-bold hover:bg-primary-dark transition">
            contact us
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer relative w-[100vw] h-[100vh] overflow-hidden flex">
        <div className="col flex flex-col justify-between px-12 py-8">
          <p className="text-lg font-semibold text-primary mb-4">instagram / snapchat / tiktok</p>
          <div className="footer-links flex flex-col gap-2 mb-4">
            <p className="text-base text-gray-700 font-medium">menu</p>
            <h1 className="text-xl font-bold text-primary">contact</h1>
            <h1 className="text-xl font-bold text-primary">about</h1>
            <h1 className="text-xl font-bold text-primary">works</h1>
          </div>
          <p className="text-sm text-gray-500">© 2023 All rights reserved</p>
        </div>
        <div className="col flex flex-col justify-between px-12 py-8">
          <p className="text-lg font-semibold text-primary mb-4">
            contact us <br />
            <button className="bg-primary text-white px-4 py-1 rounded font-bold hover:bg-primary-dark transition">contact</button>
          </p>
          <div className="shop mb-4">
            <div className="img">
              <ParalaxImage src="/images/gallery6.jpg" alt="Shop Image" />
            </div>
          </div>
          <p className="text-lg font-semibold text-primary">tiktok / instagram / snapchat</p>
        </div>
      </section>
    </div>
  );
}

export default GallerySection;
