import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="تصميم داخلي أنيق"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-arabic-traditional">المساحة،، معاً لنضيئ مساحتكـ</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">تصميم داخلي | تأثيث | هوية بصرية | دورات تدريبية</p>
        <Link
          href="/services"
          className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          استكشف خدماتنا
        </Link>
      </div>
    </section>
  )
}
