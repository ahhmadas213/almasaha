import Link from "next/link"
import { MessageCircle, Calendar } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">هل لديك مشروع أو فكرة تصميم؟</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          دعنا نساعدك في تنفيذها وتحويل أحلامك إلى واقع ملموس
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://wa.me/966xxxxxxxx"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <MessageCircle size={20} className="ml-2" />
            تواصل عبر واتساب
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            <Calendar size={20} className="ml-2" />
            احجز موعدك
          </Link>
        </div>
      </div>
    </section>
  )
}
