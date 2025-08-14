import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

const portfolioCategories = [
  { id: "all", name: "جميع المشاريع" },
  { id: "residential", name: "مشاريع سكنية" },
  { id: "commercial", name: "مشاريع تجارية" },
  { id: "office", name: "مشاريع مكتبية" },
]

const projects = [
  {
    id: 1,
    category: "residential",
    title: "فيلا عصرية - الرياض",
    description: "تصميم داخلي فاخر لفيلا سكنية بمساحة 800 متر مربع",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
  },
  {
    id: 2,
    category: "commercial",
    title: "مطعم راقي - جدة",
    description: "تصميم داخلي لمطعم بطابع عربي معاصر",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
  },
  {
    id: 3,
    category: "office",
    title: "مكتب شركة تقنية",
    description: "تصميم مكتب عصري ومريح لشركة تقنية ناشئة",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
  {
    id: 4,
    category: "residential",
    title: "شقة عائلية - الدمام",
    description: "تجديد شامل لشقة عائلية بتصميم دافئ ومريح",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
  {
    id: 5,
    category: "commercial",
    title: "صالون تجميل فاخر",
    description: "تصميم صالون تجميل بلمسات أنثوية راقية",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
  },
  {
    id: 6,
    category: "office",
    title: "مكتب محاماة",
    description: "تصميم مكتب محاماة بطابع كلاسيكي أنيق",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
]

export default function Portfolio() {
  return (
    <main>
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">معرض الأعمال</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استكشف مجموعة من أفضل مشاريعنا المنجزة في مختلف المجالات
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm">
                    {project.year}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <span className="text-accent font-semibold">
                  {portfolioCategories.find((cat) => cat.id === project.category)?.name}
                </span>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">فيديوهات من أعمالنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-600">فيديو من إنستغرام</p>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-600">فيديو من تيك توك</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
