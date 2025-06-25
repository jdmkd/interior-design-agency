import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/src/components/header"
import Footer from "@/src/components/footer"
import ProgressProvider from "@/src/components/progress-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxe Design Studio - Interior Design & Architecture",
  description: "Professional interior design and architecture services. Transform your space with our expert team.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
