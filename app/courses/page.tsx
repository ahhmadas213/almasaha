import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    name: "دورة أساسيات التصميم الداخلي",
    date: "15/10/2025",
    duration: "5 أيام",
    level: "مبتدئ",
    price: "2,500 ريال",
    description: "تعلم أساسيات التصميم الداخلي من الألف إلى الياء",
  },
  {
    name: "دورة تأثيث احترافي",
    date: "20/11/2025",
    duration: "3 أيام",
    level: "متوسط",
    price: "1,800 ريال",
    description: "احترف فن اختيار وتنسيق الأثاث",
  },
  {
    name: "دورة الإضاءة في التصميم",
    date: "05/12/2025",
    duration: "2 أيام",
    level: "متقدم",
    price: "1,200 ريال",
    description: "تعلم كيفية استخدام الإضاءة لتعزيز التصميم",
  },
  {
    name: "دورة الألوان والخامات",
    date: "15/01/2026",
    duration: "4 أيام",
    level: "مبتدئ",
    price: "2,000 ريال",
    description: "فهم نظرية الألوان وكيفية اختيار الخامات",
  },
]

export default function Courses() {
  return (
    <main>
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">الدورات التدريبية</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم دورات تدريبية متخصصة تساعدك على تطوير مهاراتك في التصميم الداخلي والتأثيث، سواء كنت مبتدئًا أو محترفًا.
            </p>
          </div>

          {/* Courses Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary">
                <tr>
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">اسم الدورة</th>
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">التاريخ</th>
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">المدة</th>
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">المستوى</th>
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">السعر</th>
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">التسجيل</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{course.name}</td>
                    <td className="px-6 py-4 text-gray-600">{course.date}</td>
                    <td className="px-6 py-4 text-gray-600">{course.duration}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.level === "مبتدئ"
                            ? "bg-green-100 text-green-800"
                            : course.level === "متوسط"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {course.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-accent">{course.price}</td>
                    <td className="px-6 py-4">
                      <Link
                        href="/contact"
                        className="bg-accent text-white px-4 py-2 rounded-lg text-sm hover:bg-accent/90 transition-colors"
                      >
                        سجل الآن
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.name}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">التاريخ:</span>
                    <span className="font-semibold">{course.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">المدة:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">المستوى:</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">السعر:</span>
                    <span className="font-bold text-accent text-lg">{course.price}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-accent text-white text-center py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  سجل في الدورة
                </Link>
              </div>
            ))}
          </div>

          {/* Previous Courses Images */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">صور من دوراتنا السابقة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="دورة تدريبية سابقة"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="ورشة تأثيث"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="حفل تخرج"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
