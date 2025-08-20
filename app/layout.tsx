import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "المساحة للتصميم الداخلي",
  description: "تصميم داخلي | تأثيث | هوية بصرية | دورات تدريبية - نصنع مساحات تلهمك وتلبي احتياجاتك",
  keywords: "تصميم داخلي, تأثيث, هوية بصرية, دورات تدريبية, السعودية, جدة",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`font-cairo antialiased bg-white`}>
        <main className="">
        {children}
        </main>
        <Footer />
        </body>

    </html>
  )
}
