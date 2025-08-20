'use client'
import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

function Footer() {
  // The embed URL for the specified location
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.137837803622!2d39.1352224!3d21.541982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da4100000001%3A0x67319e7a9e65893!2sShed.!5e0!3m2!1sen!2sus!4v1672531200000";

  return (
    // I removed `h-screen` to allow the footer to resize naturally with its content,
    // which is better for responsiveness.
    <footer className="bg-primary text-almost_black py-16 px-6 md:px-16">
      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

        {/* Column 1 - Logo & Description */}
        <div className="space-y-4">
          <Image
              src="/images/logo.png"
              width={32} // Using a number directly is better here
              height={32}
              alt="logo"
              className="object-contain w-32 h-32" // Removed w-24, h-24 as width/height props handle it
            />
          <p className="text-sm lg:w-3/4 text-gray-600 leading-relaxed">
            نصنع مساحات تنبض بالإبداع وتجمع بين الأناقة والراحة.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">الرئيسية</Link></li>
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/services">خدماتنا</Link></li>
            <li><Link href="/portfolio">أعمالنا</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">تواصل معنا</h3>
          <p className="text-sm">نحن هنا لنحوّل رؤيتك إلى واقع.</p>
          <div className="z-10 flex gap-3">
              <a href="https://www.tiktok.com/@almasaha_sa?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.instagram.com/almasaha_sa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black  border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black  border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
                <FaSnapchatGhost size={20} />
              </a>
          </div>
          <div className="flex space-x-3 rtl:space-x-reverse">
            <Link
              href="/contact"
              className="bg-almost_black text-white text-sm px-4 py-2 rounded-full hover:bg-almost_black/90"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

      <div className=" space-y-4">
        <h3 className="font-semibold text-lg mb-4 text-center md:text-right">موقعنا</h3>
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-200">
          <iframe
            src={mapEmbedUrl}
            title="Shed office, Jeddah, Saudi Arabia Location"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      </div>

      {/* --- NEW: Google Maps Section --- */}


      {/* Copyright section */}
      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2025 المساحة للتصميم الداخلي - جميع الحقوق محفوظة</p>
        <div className="flex space-x-4 rtl:space-x-reverse mt-2 md:mt-0">
          <Link href="/terms">الشروط والأحكام</Link>
          <Link href="/privacy">سياسة الخصوصية</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;