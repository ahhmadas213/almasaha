import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Palette, Home, Sofa, GraduationCap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "بناء هوية",
    description: "تصميم شعار وهوية بصرية متكاملة تعبّر عن شخصية العلامة.",
    features: ["تصميم الشعار", "الهوية البصرية", "دليل الاستخدام", "التطبيقات المختلفة"],
  },
  {
    icon: Home,
    title: "تصميم داخلي",
    description: "تخطيط المساحات، اختيار الأثاث، المواد، والإضاءة بطريقة متكاملة.",
    features: ["تخطيط المساحات", "اختيار المواد", "تصميم الإضاءة", "الإشراف على التنفيذ"],
  },
  {
    icon: Sofa,
    title: "تأثيث",
    description: "اختيار وتوفير قطع أثاث مخصصة للمساحة، مع الاهتمام بجودة التنفيذ.",
    features: ["أثاث مخصص", "قطع مميزة", "جودة عالية", "ضمان التنفيذ"],
  },
  {
    icon: GraduationCap,
    title: "دورات تدريبية",
    description: "تنظيم برامج تعليمية في التصميم الداخلي، تقنية التصميم، التأثيث، وغيرها.",
    features: ["برامج متخصصة", "مدربين خبراء", "شهادات معتمدة", "تطبيق عملي"],
  },
]

export default function Services() {
  return (
    <main>
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">خدماتنا</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التصميم الداخلي والتأثيث لتلبية جميع احتياجاتكم
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center ml-4">
                    <service.icon size={32} className="text-gray-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full ml-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Services Table */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">جدول الخدمات</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-primary">
                  <tr>
                    <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">الخدمة</th>
                    <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">الوصف</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{service.title}</td>
                      <td className="px-6 py-4 text-gray-600">{service.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
