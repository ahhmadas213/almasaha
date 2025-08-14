import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">المساحة للتصميم الداخلي</h3>
            <p className="text-gray-300 mb-4">
              نصنع مساحات تلهمك وتلبي احتياجاتك. تصميم داخلي، تأثيث، هوية بصرية، ودورات تدريبية متخصصة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-accent transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-accent transition-colors">
                من نحن
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-accent transition-colors">
                خدماتنا
              </Link>
              <Link href="/portfolio" className="block text-gray-300 hover:text-accent transition-colors">
                معرض الأعمال
              </Link>
              <Link href="/courses" className="block text-gray-300 hover:text-accent transition-colors">
                الدورات التدريبية
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-accent transition-colors">
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-gray-300">
              <p>مكتب شرعي (Shed office)، جدة</p>
              <p>المملكة العربية السعودية</p>
              <p>+966xxxxxxxx</p>
              <p>info@almasaha.com</p>
            </div>
            <div className="flex items-center space-x-reverse space-x-4 mt-4">
              <Link href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-accent transition-colors">
                <MessageCircle size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 المساحة للتصميم الداخلي - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
