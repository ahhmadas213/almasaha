import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function About() {
  return (
    <main>
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">من نحن</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="فريق المساحة للتصميم الداخلي"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">نبذة عنا</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  في المساحة للتصميم الداخلي، نؤمن أن لكل مساحة قصة، ونهدف إلى تحويل كل مساحة إلى بيئة نابضة بالجمال
                  والوظيفية. بخبرة فريقنا وإبداعنا، نقدم خدمات متكاملة من بناء الهوية البصرية، التصميم الداخلي، التأثيث،
                  وحتى تقديم الدورات التدريبية.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-accent mb-4">رؤيتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الخيار الأول في المملكة العربية السعودية لكل من يبحث عن تصميم داخلي مبتكر وخدمات تأثيث مميزة.
                </p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-accent mb-4">رسالتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  تقديم حلول تصميمية مبتكرة تدمج بين الجمال والعملية، وتلهم عملاءنا ليعيشوا في مساحات تعكس ذوقهم
                  وهويتهم.
                </p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-accent mb-4">قيمنا</h3>
                <div className="space-y-2 text-gray-600">
                  <p>الإبداع</p>
                  <p>الجودة</p>
                  <p>الالتزام</p>
                  <p>التعاون</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
