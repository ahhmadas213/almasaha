import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <main>
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">تواصل معنا</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تحقيق حلمك. تواصل معنا اليوم ودعنا نبدأ رحلة تصميم مساحتك المثالية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">معلومات الاتصال</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                    <MapPin size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">العنوان</h3>
                    <p className="text-gray-600">
                      مكتب شرعي (Shed office)، جدة
                      <br />
                      المملكة العربية السعودية
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                    <Phone size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">الهاتف</h3>
                    <p className="text-gray-600">+966xxxxxxxx</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                    <Mail size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@almasaha.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                    <Instagram size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">وسائل التواصل الاجتماعي</h3>
                    <div className="space-y-2">
                      <a href="#" className="block text-accent hover:text-accent/80 transition-colors">
                        إنستغرام: @almasaha_design
                      </a>
                      <a href="#" className="block text-accent hover:text-accent/80 transition-colors">
                        تيك توك: @almasaha_interior
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">نموذج التواصل</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    الخدمة المطلوبة
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="interior-design">تصميم داخلي</option>
                    <option value="furniture">تأثيث</option>
                    <option value="branding">بناء هوية</option>
                    <option value="courses">دورات تدريبية</option>
                    <option value="consultation">استشارة</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center mt-16">
            <a
              href="https://wa.me/966xxxxxxxx"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              <MessageCircle size={24} className="ml-3" />
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
